<template>
    <div id="nav">
      <div class="logo-container">
        <img src="@/assets/image/logo.png" alt="LogoImage" class="logoimage" />
        <img src="@/assets/image/letterLogo.png" alt="LogoTitle" class="logotitle" />
      </div>
        <div class="menu-container">
            <router-link class ="menu" to="/videos">영상 조회</router-link>
            <router-link class ="menu" to="/login">로그아웃</router-link>
            <ToggleButton/>
        </div>
        
    </div>
</template>

<script>
import ToggleButton from './ToggleButton.vue';

export default {
  name: 'PageHeader',
  components: {
    ToggleButton
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
  left:0;
  width: 100%;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center; /* Center images vertically */
  gap: 10px; /* Space between the images */
}

.logoimage {
  height: 50px; /* Adjust height to fit your design */
  margin-bottom: 10px;
}

.logotitle {
  height: 40px; /* Adjust height to fit your design */
}

.menu-container {
  display: flex;
  gap: 20px; /* Space between menu items */
  margin-right: 50px;
}

.menu {
  color: #ffffff; /* Set text color for menu items */
  text-decoration: none; /* Remove underline */
  margin-top: 5px;
  font-size: 15px; /* Adjust font size as needed */
}

.menu:hover {
  text-decoration: underline; /* Optional: underline on hover */
}
</style>