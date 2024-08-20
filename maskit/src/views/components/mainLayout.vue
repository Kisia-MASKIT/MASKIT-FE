<template>
    <div class="mainLayout">
       <PageHeader />
       <div class = "stepContainer">
        <progressBar :currentStep="currentStep" :steps="steps" />
       </div>
    <div class="main-content">
      <slot></slot> <!-- Slot for dynamic content -->
    </div>
    <div class="button-container" v-if="buttonRoute">
      <router-link :to="buttonRoute" class="full-width-link">
        <button class="navigate-button" @click="handleClick">
          {{ buttonText }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/views/components/PageHeader.vue';
import progressBar from './progressBar.vue';

export default {
  name: 'mainLayout',
  components: {
    PageHeader,
    progressBar,
  },
  props: {
    buttonRoute: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: '다음단계로 이동하기'
    },
    steps: {
      type: Array,
      default: () => ['Step 1', 'Step 2', 'Step 3', 'Step 4']
    },
    currentStep: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleClick() {
      this.$emit('next-step');
    }
  }
}
</script>

<style scoped>
.mainLayout {
  background-color: #DCE6EA; /* General background color */
  min-height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column; /* Stack header and main content vertically */
}

.stepContainer{
    margin-top: 80px;
    z-index: 1000;
}

.main-content {
  margin: 60px auto; /* Center content with top margin */
  padding: 20px;
  background-color: #ffffff; /* White background for the content box */
  border-radius: 8px; /* Rounded corners */
  width: 80%; /* Adjust width as needed */
  max-width: 1000px; /* Maximum width for large screens */
}

.button-container {
  width: 100%; /* Make the button container full width */
  margin-top: 20px; /* Add margin at the top for spacing */
  display: flex;
  justify-content: center; /* Center the button horizontally */
}

.full-width-link {
  width: 80%; /* Match the width of the main-content */
  max-width: 1000px; /* Match the max-width of the main-content */
}

.navigate-button {
  background-color: #22B2D2; /* Button background color */
  color: #fff; /* Button text color */
  width: 100%; /* Make the button full width */
  height: 65px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold; /* Make the font bold */
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigate-button:hover {
  background-color: #c4d1d6; /* Darker shade on hover */
}
</style>