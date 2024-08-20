<template>
  <div class="maskingPage">
    <PageHeader />
    <div class="stepContainer">
      <progressBar :currentStep="currentStep" :steps="steps" />
    </div>
    <div class="main-content">
      <div class="content-area">
        <h1>마스킹 처리가 완료되었습니다.</h1>
      </div>
    </div>
    <div class="button-container">
      <router-link v-for="(button, index) in buttons" :key="index" :to="button.route" class="full-width-link">
        <button class="navigate-button" @click="button.onClick">
          {{ button.text }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PageHeader from '@/views/components/PageHeader.vue';
import progressBar from '@/views/components/progressBar.vue';

export default {
  name: 'maskingPage',
  components: {
    PageHeader,
    progressBar,
  },
  props: {
    buttons: {
      type: Array,
      default: () => [
        { text: '전체 마스킹 영상 다운받기', onClick: () => this.downloadAllMaskedVideos() },
        { text: '일부 마스킹 영상 다운받기', onClick: () => this.downloadPartMaskedVideos() },
        { text: '처음으로 돌아가기', route: '/main' },
      ]
    },
    steps: {
      type: Array,
      default: () => ['Step 1', 'Step 2', 'Step 3', 'Step 4']
    },
    currentStep: {
      type: Number,
      default: 4
    }
  },
  methods: {
    async downloadAllMaskedVideos() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/videos/masked`, {
          responseType: 'blob'  // Important for downloading files
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'masked_video.mp4');  // Set the default file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

      } catch (error) {
        console.error('전체 마스킹 영상 다운로드 중 오류 발생:', error);
        alert('전체 마스킹 영상 다운로드에 실패했습니다.');
      }
    },
    async downloadPartMaskedVideos() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/videos/subject`, {
          responseType: 'blob'  // Important for downloading files
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'part_masked_video.mp4');  // Set the default file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

      } catch (error) {
        console.error('일부 마스킹 영상 다운로드 중 오류 발생:', error);
        alert('일부 마스킹 영상 다운로드에 실패했습니다.');
      }
    }
  }
}
</script>

<style scoped>
.maskingPage {
  background-color: #DCE6EA;
  min-height: 100vh; 
  display: flex;
  flex-direction: column; 
}

.stepContainer {
  margin-top: 80px;
  z-index: 500;
}

.main-content {
  margin: 60px auto; 
  padding: 20px;
  background-color: #ffffff; 
  border-radius: 8px; 
  width: 80%; 
  max-width: 1000px; 
}

.content-area {
  height: 200px; 
  background-color: #f8f9fa; 
  border-radius: 8px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  text-align: center; 
}

.button-container {
  width: 80%; 
  margin-top: 20px auto; 
  margin-left: 10%;
  display: flex;
  align-items: center; 
  justify-content: center; 
}

.full-width-link {
  width: 60%; 
  max-width: 1000px; 
}

.navigate-button {
  background-color: #22B2D2; 
  color: #fff;
  width: 90%; 
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
