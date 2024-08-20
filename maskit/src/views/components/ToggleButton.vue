<template>
    <label class="switch">
      <input
        type="checkbox"
        :disabled="disabled"
        :checked="checked"
        @change="toggleCheckbox"
        aria-checked="checked"
        aria-disabled="disabled"
      />
      <div class="slider round"></div>
    </label>
  </template>
  
  <script>
  export default {
    name: 'ToggleButton',
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleCheckbox(event) {
        if (!this.disabled) {
          this.$emit('update:checked', event.target.checked);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #101010;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #101010;
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  </style>
  