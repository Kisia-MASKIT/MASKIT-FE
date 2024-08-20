<template>
    <mainLayout buttonRoute="/nextpage" buttonText="다음단계로 이동">
      <div class="video-upload">
        <h1>Upload Your Video</h1>
        <div class="drop-zone" @drop.prevent="handleDrop" @dragover.prevent>
          <p>Drag and drop your video file here</p>
          <input type="file" accept="video/*" @change="handleFileChange" hidden ref="fileInput" />
          <button @click="triggerFileInput">Select File</button>
        </div>
      </div>
    </mainLayout>
  </template>
  
  <script>
  import mainLayout from '@/views/components/mainLayout.vue';
  
  export default {
    name: 'VideoUploadPage',
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
  .video-upload {
    text-align: center;
    height: 50%
  }
  
  .drop-zone {
    border: 2px dashed #22B2D2; /* Dashed border for the drop area */
    border-radius: 8px; /* Rounded corners */
    padding: 20px;
    background-color: #f8f9fa; /* Light background color */
    cursor: pointer;
  }
  
  .drop-zone p {
    margin: 0;
    color: #22B2D2; /* Blue color for text */
  }
  
  .navigate-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #007BFF; /* Blue background for the button */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none; /* Remove underline */
  }
  
  .navigate-button:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
  </style>
  