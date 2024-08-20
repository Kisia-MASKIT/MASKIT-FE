<template>
  <mainLayout :currentStep="2" buttonRoute="/editVideo" buttonText="다음단계로 이동">
    <div class="detected">
      <h1>이상행동 발생 지점 탐지가 완료되었습니다.</h1>
      <div class="title">
        <h4>시작 지점</h4>
        <h4>끝 지점</h4>
      </div>
      <div class="detect timestamp">
        <listBlocks 
          v-for="(item, index) in timestampData" 
          :key="index"
          :startTime="item.startTime" 
          :endTime="item.endTime" 
        />
      </div>
    </div>
  </mainLayout>
</template>

<script>
import axios from 'axios';
import mainLayout from '@/views/components/mainLayout.vue';
import listBlocks from '@/views/components/listBlocks.vue';

export default {
  name: 'detectionPage',
  components: {
    mainLayout,
    listBlocks
  },
  data() {
    return {
      timestampData: []
    };
  },
  async created() {
    await this.fetchTimestampData();
  },
  methods: {
    async fetchTimestampData() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/videos/detection-points`);
        const result = response.data.result;

        // Process and set timestamp data
        this.timestampData = result.map(item => ({
          startTime: item.start_time,
          endTime: item.end_time
        }));
      } catch (error) {
        console.error('Error fetching timestamp data:', error);
      }
    }
  }
}
</script>

<style>
.title {
  padding: 2px;
  margin: 3px 0;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center; /* Center items vertically */
}
</style>
