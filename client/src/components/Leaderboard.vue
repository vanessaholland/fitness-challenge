<template>
  <div class="container">
    <table class="table table-dark table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Athlete</th>
            <th scope="col">Total Activities</th>
            <th scope="col">Miles</th>
            <th scope="col">Time</th>
            <th scope="col">Elevation Gain</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(leader,i) in leaders" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ leader[1].name }}</td>
            <td>{{ leader[1].totalActivies}}</td>
            <td>{{ this.convertDistance(leader[1].totalDistance) }}</td>
            <td>{{ this.convertTime(leader[1].totalTime) }}</td>
            <td>{{ leader[1].totalElevation}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LeaderBoard',
  data() {
    return {
      leaders: {},
    };
  },
  methods: {
    getMessage() {
      const club = process.env.CLUB;
      const path = `https://www.strava.com/api/v3/clubs/${club}/activities?per_page=50`;
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      };
      axios.get(path, config)
        .then((res) => {
          this.activites = res.data;
          this.activites.forEach((activity) => {
            const athlete = activity.athlete.firstname + activity.athlete.lastname;
            if (this.leaders[athlete]) {
              this.leaders[athlete].totalActivies += 1;
              this.leaders[athlete].totalDistance += activity.distance;
              this.leaders[athlete].totalTime += activity.moving_time;
              this.leaders[athlete].totalElevation += activity.total_elevation_gain;
            } else {
              this.leaders[athlete] = {
                name: `${activity.athlete.firstname} ${activity.athlete.lastname}`,
                totalActivies: 1,
                totalDistance: activity.distance,
                totalTime: activity.moving_time,
                totalElevation: activity.total_elevation_gain,
              };
            }
          });
          this.leaders = this.setRanks(this.leaders);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    setRanks(leaders) {
      const rankedLeaders = new Map([...leaders.entries()].sort((a, b) => {
        if (a.totalDistance > b.totalDistance) {
          return 1;
        }
        if (a.totalDistance < b.totalDistance) {
          return -1;
        }
        return 0;
      }));
      return rankedLeaders;
    },
    convertTime(timeInSeconds) {
      return new Date(timeInSeconds * 1000).toISOString().substring(11, 19);
    },
    convertDistance(distanceInMeters) {
      return parseFloat(distanceInMeters / 1609).toFixed(2);
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
