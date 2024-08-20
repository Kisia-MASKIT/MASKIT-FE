<template>
    <div class="mainLayout">
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
  import PageHeader from '@/views/components/PageHeader.vue';
  import progressBar from '@/views/components/progressBar.vue';
  
  export default {
    name: 'mainLayout',
    components: {
      PageHeader,
      progressBar,
    },
    props: {
      buttons: {
        type: Array,
        default: () => [
          { text: '전체 마스킹 영상 다운받기', onClick: () => console.log('Button 1 clicked') },
          { text: '일부 마스킹 영상 다운받기', onClick: () => console.log('Button 2 clicked') },
          { text: '처음으로 돌아가기', route: '/' },
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
    }
  }
  </script>
  
  <style scoped>
  .mainLayout {
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
  