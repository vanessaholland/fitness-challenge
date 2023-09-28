<!-- if i was going to productionize this, would use a library for the table and sorting,
for now, more dependencies more probs -->
<template>
  <div class="container">
    <table class="table table-dark table-striped" data-cy="leader-table">
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
      <tbody data-cy="leader-table-body">
        <tr v-for="(leader, i) in rankedLeaders" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ leader }}</td>
          <td>{{ leaders[leader].totalActivies }}</td>
          <td>{{ this.convertDistance(leaders[leader].totalDistance) }}</td>
          <td>{{ this.convertTime(leaders[leader].totalTime) }}</td>
          <td>{{ leaders[leader].totalElevation }}</td>
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
      rankedLeaders: {},
    };
  },
  methods: {
    getMessage() {
      const club = process.env.VUE_APP_CLUB;
      const path = `https://www.strava.com/api/v3/clubs/${club}/activities?per_page=50`;
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
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
          this.rankedLeaders = this.setRanks(this.leaders);
          console.log(this.rankedLeaders);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    setRanks(leaders) {
      const keys = Object.keys(leaders);
      const rankedLeaders = keys.sort((a, b) => {
        if (leaders[a].totalDistance < leaders[b].totalDistance) {
          return 1;
        }
        if (leaders[a].totalDistance > leaders[b].totalDistance) {
          return -1;
        }
        return 0;
      });
      return rankedLeaders;
    },
    convertTime(timeInSeconds) {
      const hours = Math.floor(timeInSeconds / 3600);
      const secsLeft = timeInSeconds % 3600;
      const minutes = Math.floor(secsLeft / 60);
      const seconds = secsLeft % 60;
      return `${hours}:${minutes}:${seconds}`;
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
