// src/view/userView/singUp.vue
<template>
  <div class="signup-container">
    <h2>회원가입</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">사용자 이름</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">가입하기</button>
    </form>
    <p v-if="submitted">가입되었습니다!</p>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      submitted: false
    };
  },
  methods: {
    submitForm() {
      // 회원가입 로직을 여기에 작성합니다.
      this.submitted = true;
    }
  }
}
</script>

<style scoped>
@import '../../assets/styles/signUp.css';
</style>

