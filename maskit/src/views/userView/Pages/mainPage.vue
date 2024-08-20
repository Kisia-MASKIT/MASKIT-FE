<template>
  <mainLayout :currentStep="1" buttonRoute="/detectionPage" buttonText="다음단계로 이동">
    <div class="video-upload">
      <h1>Upload Your Video</h1>
      <div
        class="drop-zone"
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
        @dragleave="handleDragLeave"
        :class="{ 'dragging': isDragging }"
      >
        <p>Drag and drop your MP4 video file here</p>
        <input type="file" accept="video/mp4" @change="handleFileChange" hidden ref="fileInput" />
        <button @click="triggerFileInput">Select File</button>
      </div>
      <div v-if="uploadStatus" class="upload-status">
        <p>{{ uploadStatus.message }}</p>
        <p v-if="uploadStatus.isSuccess">User ID: {{ uploadStatus.result.user_id }}</p>
        <p v-if="uploadStatus.isSuccess">Video ID: {{ uploadStatus.result.video_id }}</p>
        <p v-if="uploadStatus.isSuccess">Upload Time: {{ new Date(uploadStatus.result.uploadTime).toLocaleString() }}</p>
      </div>
    </div>
  </mainLayout>
</template>

<script>
import axios from 'axios';
import mainLayout from '@/views/components/mainLayout.vue';

export default {
  name: 'mainPage',
  components: {
    mainLayout
  },
  data() {
    return {
      uploadStatus: null,
      isDragging: false
    };
  },
  methods: {
    handleDrop(event) {
      this.isDragging = false;
      const files = event.dataTransfer.files;
      if (files.length) {
        this.handleFiles(files);
      }
    },
    handleDragOver() {
      this.isDragging = true;
    },
    handleDragLeave() {
      this.isDragging = false;
    },
    handleFileChange(event) {
      const files = event.target.files;
      if (files.length) {
        this.handleFiles(files);
      }
    },
    async handleFiles(files) {
      // Create a FormData object
      const formData = new FormData();

      // Check and append each file to FormData
      for (const file of files) {
        if (file.type === 'video/mp4' && file.size <= 50000000) { // Limit file size to 50MB
          formData.append('video', file);
        } else {
          this.uploadStatus = {
            isSuccess: false,
            message: 'Invalid file type or file size. Only MP4 files up to 50MB are allowed.'
          };
          return;
        }
      }

      try {
        // Send the file to the backend using Axios
        const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/videos/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Optional: Add auth token if needed
          }
        });

        // Process the response
        const { data } = response;
        if (data.isSuccess) {
          this.uploadStatus = {
            isSuccess: data.isSuccess,
            message: data.message,
            result: data.result
          };
        } else {
          this.uploadStatus = {
            isSuccess: false,
            message: 'Upload failed. Please try again.'
          };
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        this.uploadStatus = {
          isSuccess: false,
          message: 'An error occurred while uploading the file.'
        };
      }
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
  height: 50%;
}

.drop-zone {
  border: 2px dashed #22B2D2;
  border-radius: 8px;
  padding: 20px;
  background-color: #f8f9fa;
  cursor: pointer;
  position: relative;
}

.drop-zone.dragging {
  background-color: #e0e0e0; /* Optional: Change background color on drag over */
}

.drop-zone p {
  margin: 0;
  color: #22B2D2;
}

.upload-status {
  margin-top: 20px;
  color: green;
}

.upload-status p {
  margin: 5px 0;
}
</style>
