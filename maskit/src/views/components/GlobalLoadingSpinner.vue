<template>
    <div v-if="isLoading" class="loading-overlay">
      <FadeLoader :loading="isLoading" :color="'#22B2D2'" />
    </div>
  </template>
  
  <script>
  import { FadeLoader } from 'vue-spinner';
  
  export default {
    name: 'GlobalLoadingSpinner',
    components: {
      FadeLoader,
    },
    props: {
      isLoading: {
        type: Boolean,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; /* Ensure it appears on top of other content */
  }
  </style>
  