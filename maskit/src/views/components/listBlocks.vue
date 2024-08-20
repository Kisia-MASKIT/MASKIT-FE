<template>
    <div class="list-item">
      <template v-if="startTime && endTime">
        <div class="time-block">
          <p>{{ formatTime(startTime) }}</p>
          <p>{{ formatTime(endTime) }}</p>
        </div>
      </template>
  
      <template v-if="videoId !== null && uploadTime && deleteTime">
        <div class="video-block">
          <p>{{ videoId }}</p>
          <p>{{ formatDateTime(uploadTime) }}</p>
          <p>{{ formatDateTime(deleteTime) }}</p>
          <P>마스킹 버전</P>
        </div>
      </template>
    </div>
  </template>
  
  <script>
  export default {
    name: 'listBlocks',
    props: {
      startTime: {
        type: String,
        default: null
      },
      endTime: {
        type: String,
        default: null
      },
      videoId: {
        type: Number,
        default: null
      },
      uploadTime: {
        type: String,
        default: null
      },
      deleteTime: {
        type: String,
        default: null
      }
    },
    methods: {
      formatTime(dateTime) {
        const date = new Date(dateTime);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}.${minutes}.${seconds}`;
      },
      formatDateTime(dateTime) {
        const options = { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        };
        return new Date(dateTime).toLocaleDateString('en-US', options);
      }
    }
  }
  </script>
  
  <style scoped>
  .list-item {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 8px;
    margin: 3px 0;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: center; /* Center items vertically */
  }
  
  .time-block{
    display: flex;
    gap: 40vh; /* Space between items */
  }

  .video-block {
    display: flex;
    gap: 15vh; /* Space between items */
  }
  
  .list-item p {
    margin: 0;
    color: #333;
    font-size: 14px;
    font-weight: normal;
  }
  </style>
  