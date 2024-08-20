<template>
  <div class="logo-container">
    <img src="../../assets/image/logo.png" alt="Logo" class="logo-signup" />
    <img src="../../assets/image/letterLogo.png" alt="Letter Logo" class="letter-logo-signup" />
  </div>
  <div class="signup-container">
    <h2 class="signup-title">회원가입</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="email" required placeholder="이메일을 입력해주세요" />
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required placeholder="비밀번호를 입력해주세요" />
      </div>
      <button class="button-style" type="submit">가입하기</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/users/signUp`, {
          email: this.email,
          password: this.password
        });

        // Handle the response from the server
        if (response.data.isSuccess) {
          alert('가입 완료되었습니다!');
          this.$router.push('/');
        } else {
          alert('가입 실패: ' + response.data.message);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    }
  }
}
</script>

<style scoped>
@import '../../assets/styles/signUp.css';
</style>
