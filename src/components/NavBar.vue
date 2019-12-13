<template>
    <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
        <a class="navbar-brand pl-5" href="#"><img src="../assets/logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto" >
                <li class="nav-item ml-lg-5">
                    <a class="nav-link" href="#">Página Inicial</a>
                </li>
                <li class="nav-item ml-lg-5">
                    <a class="nav-link" href="#">Sobre</a>
                </li>
                <li class="nav-item ml-lg-5">
                    <a class="nav-link" href="#">Reservar Mesa</a>
                </li>
                <li class="nav-item ml-lg-5">
                    <a class="nav-link" href="#">Contactos</a>
                </li>
            </ul>
            <img src="../assets/profile_icon.png" class="mr-lg-5 pl-sm-5 pl-lg-0" width="30px" heifght="30px">
        </div>
    </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.navbar-custom {
    background-color: #2C3E50;
    height: 80px;
    font-family: 'Muli', sans-serif;
    font-size: 1.3rem;
}

.navbar-brand, 
.nav-link{ 
    color: #ffffff; 
}

.collapse{
    background-color: #2C3E50;
}

/* ul{
    padding-left: 20rem;
} */
/* 
li{
    padding-left: 2.5rem;
} */
</style>