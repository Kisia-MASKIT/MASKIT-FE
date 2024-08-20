<template>
    <div class="loadingPage">
      <PageHeader />
      <div v-if="isLoading" class="spinner-div">
        <FadeLoader :loading="isLoading" :color="'#22B2D2'" />
      </div>
      <div v-else class="content">
        <!-- Render your content here -->
        <h1>Data Loaded Successfully</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { FadeLoader } from 'vue-spinner/dist/vue-spinner.min';
  //import axios from 'axios';
  import PageHeader from '@/views/components/PageHeader.vue'; // Adjust the path as needed
  
  export default {
    name: 'LoadingPage',
    components: {
      PageHeader,
      FadeLoader,
    },
    data() {
      return {
        isLoading: true,
        data: null, // This will hold the fetched data
      };
    },
    /*
    mounted() {
      // Simulating an Axios request
      axios
        .get('https://api.example.com/data') // Replace with your API endpoint
        .then((response) => {
          this.data = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.isLoading = false;
        });
    },*/
  };
  </script>
  
  <style scoped>
  .loadingPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #DCE6EA; /* Adjust the background color as needed */
  }
  
  .spinner-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  .content {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  