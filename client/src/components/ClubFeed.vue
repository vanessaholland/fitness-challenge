<template>
  <div class="container">
    <table class="table table-dark">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Athlete</th>
            <th scope="col">Activity</th>
            <th scope="col">Distance</th>
            <th scope="col">Time</th>
            <th scope="col">Type</th>
            <th scope="col">Elevation Gain</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(activity,i) in activities" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ activity.athlete.firstname + " " + activity.athlete.lastname }}</td>
            <td>{{ activity.name }}</td>
            <td>{{ activity.distance }}</td>
            <td>{{ activity.moving_time}}</td>
            <td>{{ activity.sport_type}}</td>
            <td>{{ activity.total_elevation_gain}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ClubFeed',
  data() {
    return {
      activities: [],
    };
  },
  methods: {
    getMessage() {
      const club = process.env.CLUB;
      const path = `https://www.strava.com/api/v3/clubs/${club}/activities`;
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      };
      axios.get(path, config)
        .then((res) => {
          this.activities = res.data;
          console.log(this.activities);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
