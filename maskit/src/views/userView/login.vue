<template>
  <div class="login-page">
    <div class="login-background"></div>
    <div :class="['splash-image', { 'splash-slide': slideCompleted }]">
      <img src="../../assets/image/main.jpg" alt="Splash Image" />
    </div>
    <div :class="['login-container', { 'login-show': slideCompleted }]">
      <div class="logo-container">
        <img src="../../assets/image/logo.png" alt="Logo" class="logo-login" />
        <img src="../../assets/image/letterLogo.png" alt="Letter Logo" class="letter-logo-login" />
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="이메일을 입력해주세요"
          />
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div class="signup-link">
          <button class="button-style" type="submit">로그인하기</button>
          <router-link to="/signUp">회원가입</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: '',
      slideCompleted: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.slideCompleted = true;
    }, 1200); // 1.2초 후 애니메이션 완료
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/login`, {
        email: this.email,
       password: this.password
      });
        
        // 로그인 성공 시 응답에서 accessToken 추출
        const { accessToken } = response.data;

        // 토큰을 localStorage에 저장
        localStorage.setItem('accessToken', accessToken);

        // 로그인 성공 후 다른 페이지로 이동하거나 상태 업데이트
        this.$router.push('/dashboard'); // 예를 들어 대시보드 페이지로 이동

      } catch (error) {
        console.error('로그인 오류:', error);
        alert('로그인에 실패했습니다.');
      }
    }
  }
}
</script>

<style scoped>
@import '../../assets/styles/login.css'; /* CSS 파일 import */
</style>
