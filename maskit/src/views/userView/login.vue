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
    }, 1200); // 1.5초 후 애니메이션 완료
  },
  methods: {
    login() {
      // 로그인 버튼 클릭 시 처리할 내용
      // 현재는 아무런 상태 변화가 없음
    }
  }
}
</script>

<style scoped>
@import '../../assets/styles/login.css'; /* CSS 파일 import */
</style>
