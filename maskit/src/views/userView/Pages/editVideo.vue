<template>
    <mainLayout :currentStep="3" buttonRoute="/maskingPage" buttonText="다음단계로 이동">
      <div class="editing">
        <h1>시간 기준 앞뒤 10초 영상 자르기</h1>
        
      </div>
    </mainLayout>
  </template>
  
  <script>
  import mainLayout from '@/views/components/mainLayout.vue';
  
  export default {
    name: 'detectionPage',
    components: {
        mainLayout
    },
    methods: {
      handleDrop(event) {
        const files = event.dataTransfer.files;
        if (files.length) {
          this.handleFiles(files);
        }
      },
      handleFileChange(event) {
        const files = event.target.files;
        if (files.length) {
          this.handleFiles(files);
        }
      },
      handleFiles(files) {
        // Handle the file upload or processing here
        console.log('Files dropped or selected:', files);
      },
      triggerFileInput() {
        this.$refs.fileInput.click();
      }
    }
  }
  </script>
  
  <style scoped>
  .editing {
    text-align: center;
    height: 50%
  }
  
  
  </style>
  