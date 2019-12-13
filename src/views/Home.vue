<template>
    <div class="home">
      <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
        <div class="barra position-absolute d-flex justify-content-center">
          <div class="logo text-center">
            <img src="../assets/logo.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
  .imgContainer {

    background: url(../assets/background.jpg) no-repeat center center fixed; 
    background-size: cover;
    width: 100%;
    height: 100vh;
  }

  .barra {
    border-left: 400px solid #2C3E50;
    height: 100%;
    opacity: 0.75;
    top: 0;
  }
</style>