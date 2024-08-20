<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="data">{{ data.message }}</p>
  </div>
</template>

<script>
import apiClient from './axios'; // Adjust the path as needed

export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiClient.get('/test'); // Make a GET request to /api/test
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>
