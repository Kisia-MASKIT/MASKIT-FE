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
export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // 회원가입 로직을 여기에 작성합니다.
      // 예를 들어, 서버에 요청을 보내고 응답을 처리하는 코드가 필요할 수 있습니다.

      // 회원가입이 완료되면 팝업 메시지 표시
      alert('가입완료되었습니다! ');

      // 로그인 페이지로 이동
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
@import '../../assets/styles/signUp.css';
</style>


