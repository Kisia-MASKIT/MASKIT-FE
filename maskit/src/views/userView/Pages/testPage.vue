<template>
    <div>
      
      <progressBar :currentStep="currentStep" />
      <button @click="nextStep">Next Step</button>
    </div>
  </template>
  
  <script>
 import progressBar from '@/views/components/progressBar.vue';
 //import PageHeader from '@/views/components/PageHeader.vue';

  export default {
    components: {
      //PageHeader,
      progressBar,
    },
    data() {
      return {
        currentStep: 1,
      };
    },
    methods: {
      nextStep() {
        if (this.currentStep < 4) {
          this.currentStep++;
        }
      },
    },
  };
  </script>
  
