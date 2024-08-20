<template>
  <div id="nav">
    <div class="logo-container">
      <img src="@/assets/image/logo.png" alt="LogoImage" class="logoimage" />
      <img src="@/assets/image/letterLogo.png" alt="LogoTitle" class="logotitle" />
    </div>
    <div class="menu-container">
      <router-link class="menu" to="/videos">영상 조회</router-link>
      <button class="menu" @click="logout">로그아웃</button> 
      <ToggleButton />
    </div>
  </div>
</template>

<script>
import ToggleButton from './ToggleButton.vue';

export default {
  name: 'PageHeader',
  components: {
    ToggleButton
  },
  methods: {
    logout() {
      // localStorage에서 accessToken 제거
      localStorage.removeItem('accessToken');

      // 로그인 페이지로 리디렉션
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #484848;
  padding: 5px 20px;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
}

.logoimage {
  height: 50px; /* Adjust height to fit your design */
}

.logotitle {
  height: 40px; /* Adjust height to fit your design */
}

.menu-container {
  display: flex;
  align-items: center; /* Center items vertically */
  gap: 20px; /* Space between menu items */
  margin-right: 50px;
}

.menu {
  color: #ffffff; /* Set text color for menu items */
  text-decoration: none; /* Remove underline */
  font-size: 15px; /* Adjust font size as needed */
  background: none; /* Remove button default background */
  border: none; /* Remove button default border */
  cursor: pointer; /* Change cursor to pointer */
  padding: 5px 10px; /* Add padding for consistent size */
}

.menu:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>