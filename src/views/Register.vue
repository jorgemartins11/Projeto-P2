<template>
  <div class="home">
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <img src="../assets/background.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <img src="../assets/logo.png" id="logo" alt="" class="img-fluid pt-5 pb-5">
            <hr>
            <form>
              <div class="form-group pt-5">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  name="name"
                  placeholder="Nome Próprio"
                  required 
                  v-model="name"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername"
                  name="username"
                  placeholder="Nome de Utilizador"
                  required
                  v-model="username"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                  v-model="email"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="pw1"
                  placeholder="Palavra-Passe"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
                  name="pw2"
                  placeholder="Repetir Palavra-Passe"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                  v-model="password"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  class="form-control"
                  id="exampleInputBirthDate"
                  name="birthDate"
                  placeholder="Data de Nascimento"
                  onfocus="(this.type='date')"
                  required
                  v-model="birthDate"
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="select"
                  class="form-control"
                  id="exampleInputUserType"
                  name="userType"
                  placeholder="Tipo de Utilizador"
                  required
                  v-model="userType"
                />
              </div>
              <button type="submit" id="criarConta" class="btn btn-primary btn-lg mt-4 mb-1">Criar Conta</button>
              <div>
                <router-link to="/login">
                  <button id="login" class="btn btn-primary btn-lg mt-4 mb-5 mr-1">Login</button>
                </router-link>
                <button id="disabled" class="btn btn-disabled btn-lg mt-4 mb-5 ml-1" disabled>Registar</button>
              </div>
            </form>
            <hr>
            <div class="eshtInfo pt-5">
              <img src="../assets/ipplogo.png" id="logo" alt class="img-fluid mt-5 mb-4" />
              <small class="form-text mt-3">Escola Superior de Hotelaria e Turismo</small>
              <small class="form-text">Rua D. Sancho I, n.º 981</small>
              <small class="form-text">4480-876 Vila do Conde</small>
              <small class="form-text mb-3">Portugal</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgContainer {
  width: 100%;
  height: 100vh;
}

.barra {
  background-color: #2c3e50;
  height: auto;
  width: 30rem;
  opacity: 0.75;
  top: 0;
  position: absolute;
}

img#logo{
  height: auto;
  width: 50%;
}

img#bg{
  position: fixed;
  height: 100%;
  width: 100%;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

hr{
  height: 1px;
  width: 20rem;
  background-color: white;
}

small{
  font-family: 'Muli', sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  opacity: 1;
}

.form-control{
  background-color: #707070;
  border-color: #707070;
  color: white;
}

input::placeholder{
    color: white;
}

input:active{
  background-color: #707070;
}

input:focus{
  background-color: #707070;
  border: 1px solid black !important;
  box-shadow: unset;
}

.btn{
  background-color: #707070;
  border-color: #707070;
}

.btn-disabled{
  border-color: white;
  color: #707070;
  background-color: white;
}

#login:hover{
  border: 1px solid white !important;
  background-color: #007bff;
}

#criarConta:hover{
  border: 1px solid white !important;
  background-color: #007bff;
}
</style>

<script src="../../account.js"></script>
<script>

  function registerVerification(form){
      if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
        if(form.pwd1.value.length < 8) {
          alert("Error: Password must contain at least 8 characters!");
          form.pwd1.focus();
          return false;
        }
        if(form.pwd1.value == form.username.value) {
          alert("Error: Password must be different from Username!");
          form.pwd1.focus();
          return false;
        }
        re = /[0-9]/;
        if(!re.test(form.pwd1.value)) {
          alert("Error: Password must contain at least one number (0-9)!");
          form.pwd1.focus();
          return false;
        }
        re = /[a-z]/;
        if(!re.test(form.pwd1.value)) {
          alert("Error: Password must contain at least one lowercase letter (a-z)!");
          form.pwd1.focus();
          return false;
        }
        re = /[A-Z]/;
        if(!re.test(form.pwd1.value)) {
          alert("Error: Password must contain at least one uppercase letter (A-Z)!");
          form.pwd1.focus();
          return false;
        }
    }
    else if (form.pwd1.value == "" || form.pwd2.value == "") {
       alert("Error: Please fill both Password fields and make sure their value is the same!");
    }
    else if (form.pwd1.value !== form.pwd2.value) {
       alert("Error: Passwords do not match! Make sure they have the same value!");
    }
    else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
    }
  };

  function checkPassword(str)
  {
    // at least one number, one lowercase and one uppercase letter
    // at least 8 characters
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return re.test(str);
  }
  </script>