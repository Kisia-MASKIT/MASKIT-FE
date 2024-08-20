<!-- src/components/ButtonBase.vue -->
<template>
  <component
    :is="component"
    :to="to"
    :class="['btn', `btn--${type}`, `btn--${size}`, { 'btn--disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'ButtonBase',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'danger'].includes(value);
      }
    },
    size: {
      type: String,
      default: 'medium', // Default size
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    component: {
      type: String,
      default: 'button'
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn--small {
  padding: 5px 10px;
  font-size: 14px;
}

.btn--medium {
  padding: 10px 20px;
  font-size: 16px;
}

.btn--large {
  padding: 15px 30px;
  font-size: 18px;
  width: 600px;
}

.btn--primary {
  background-color: #007bff;
}

.btn--primary:hover {
  background-color: #0056b3;
}

.btn--secondary {
  background-color: #6c757d;
}

.btn--secondary:hover {
  background-color: #5a6268;
}

.btn--danger {
  background-color: #dc3545;
}

.btn--danger:hover {
  background-color: #c82333;
}

.btn--disabled {
  background-color: #e9ecef;
  color: #6c757d;
  cursor: not-allowed;
}
</style>
