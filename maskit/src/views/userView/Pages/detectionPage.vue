<template>
    <mainLayout :currentStep="2" buttonRoute="/editVideo" buttonText="다음단계로 이동">
      <div class="detected">
        <h1>이상행동 발생 지점 탐지가 완료되었습니다.</h1>
        <div class ="title">
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
        timestampData: [
          { startTime: '2024-08-20T12:00:00Z', endTime: '2024-08-20T12:30:00Z' },
          { startTime: '2024-08-21T14:00:00Z', endTime: '2024-08-21T14:45:00Z' }
        ]
      };
    }
  }
  </script>

  <style>
      .title{
    padding: 2px;
    margin: 3px 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: center; /* Center items vertically */
  }
</style>
  