<template>
    <mainLayout :currentStep="3" buttonRoute="/maskingPage" buttonText="다음단계로 이동">
      <div class="editing">
        <h1>시간 기준 앞뒤 10초 영상 자르기</h1>
        <div class="cut-video" >
          
        </div>
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
  
  .cut-video {
    border: 2px dashed #22B2D2; /* Dashed border for the drop area */
    border-radius: 8px; /* Rounded corners */
    padding: 20px;
    background-color: #f8f9fa; /* Light background color */
    cursor: pointer;
  }
  
  .cut-video p {
    margin: 0;
    color: #22B2D2; /* Blue color for text */
  }
  
  </style>
  