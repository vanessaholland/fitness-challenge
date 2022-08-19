<template>
  <div class="container">
    <table class="table table-dark">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Distance</th>
            <th scope="col">Time</th>
            <th scope="col">Elevation</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(activity,i) in activities" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ activity.name }}</td>
            <td>{{ activity.distance }}</td>
            <td>{{ activity.moving_time }}</td>
            <td>{{ activity.total_elevation_gain }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ActivityFeed',
  data() {
    return {
      activities: [],
    };
  },
  methods: {
    getMessage() {
      const currentDate = new Date();
      const today = currentDate / 1000;
      const ninetyDaysAgo = (new Date(new Date().setDate(currentDate.getDate() - 30))) / 1000;
      const path = `https://www.strava.com/api/v3/athlete/activities?before=${today}&after=${ninetyDaysAgo}&page=1&per_page=30`;
      const config = {
        headers: {
          Authorization: 'Bearer ',
        },
      };
      axios.get(path, config)
        .then((res) => {
          this.activities = res.data;
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
