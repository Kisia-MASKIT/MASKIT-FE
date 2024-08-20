<template>
  <div class="page">
    <PageHeader />
    <div class="content">
      <h1>Uploaded Video Information</h1>
      <div class="title">
        <h4>영상 ID</h4>
        <h4>업로드 시간</h4>
        <h4>삭제 예정 시간</h4>
        <h4>마스킹 버전</h4>
      </div>
      <div class="detect timestamp">
        <listBlocks 
          v-for="(item, index) in videoData" 
          :key="index"
          :videoId="item.videoId" 
          :uploadTime="item.uploadTime" 
          :deleteTime="item.deleteTime" 
        />
      </div>
    </div>
    <div class="button-container">
      <router-link to="/main" class="full-width-link">
        <button class="navigate-button">
          처음으로 이동하기
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PageHeader from '@/views/components/PageHeader.vue';
import listBlocks from '@/views/components/listBlocks.vue';

export default {
  name: 'checkVideos',
  components: {
    PageHeader,
    listBlocks,
  },
  data() {
    return {
      videoData: []
    };
  },
  async created() {
    await this.fetchVideoData();
  },
  methods: {
    async fetchVideoData() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/videos/info`);
        const result = response.data.result;

        // Process and set video data
        this.videoData = result.map(video => ({
          videoId: video.vid_id,
          uploadTime: video.uploadTime,
          deleteTime: this.calculateDeleteTime(video.uploadTime),
          status: video.status // Added in case you want to use it later
        }));
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    },
    calculateDeleteTime(uploadTime) {
      const uploadDate = new Date(uploadTime);
      const deleteDate = new Date(uploadDate.getTime() + 60 * 60 * 1000); // Add 1 hour in milliseconds
      return deleteDate.toISOString();
    }
  }
}
</script>

<style>
.page {
  background-color: #DCE6EA;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.content {
  width: 80%;
  max-width: 1000px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 100px;
}

.title {
  padding: 2px;
  margin: 3px 0;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.button-container {
  width: 100%; 
  margin-top: 20px; 
  display: flex;
  justify-content: center; 
}

.full-width-link {
  width: 80%; 
  max-width: 1000px; 
}

.navigate-button {
  background-color: #22B2D2;
  color: #fff;
  width: 100%;
  height: 65px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigate-button:hover {
  background-color: #484848;
}
</style>
