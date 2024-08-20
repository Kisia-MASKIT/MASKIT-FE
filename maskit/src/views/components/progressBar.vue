<template>
    <div class="progress-bar">
      <div class="step" v-for="(step, index) in steps" :key="index">
        <div
          class="circle"
          :class="{ filled: currentStep >= index + 1 }"
        >
          {{ index + 1 }}
        </div>
        <span class="step-label">{{ step }}</span>
        <div v-if="index < steps.length - 1" class="connector"></div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    currentStep: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 1 && value <= 4;
      },
    },
    steps: {
      type: Array,
      default: () => ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    },
  },
};
</script>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  flex:1;
}

.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  z-index: 2;
}

.circle.filled {
  background-color: #22b2d2;
}

.step-label {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

.connector {
  position: absolute;
  top: 30%;
  left: calc(50%);
  width: calc(100% + 20px);
  height: 0;
  border-top: 3px dotted #000;
  z-index: 1;
}
</style>

  