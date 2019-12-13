<template>
  <div class="home">
    <div class="imgContainer position-relative d-flex align-items-center justify-content-center">
      <img src="../assets/background.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <img src="../assets/logo.png" id="logo" alt="" class="img-fluid pt-5 pb-3">
            <hr>
            <form>
              <div class="form-group pt-4">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Nome Próprio"
                  required
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername"
                  placeholder="Nome de Utilizador"
                  required
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Palavra-Passe"
                  required
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
                  placeholder="Repetir Palavra-Passe"
                  required
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputBirthDate"
                  placeholder="Data de Nascimento"
                  required
                />
              </div>
              <div class="form-group pt-1">
                <input
                  type="select"
                  class="form-control"
                  id="exampleInputUserType"
                  placeholder="Tipo de Utilizador"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary mt-4 mb-1">Criar Conta</button>
              <div>
                <button type="submit" class="btn btn-primary mt-4 mb-3 mr-1" >Login</button>
                <button type="submit" class="btn btn-disabled mt-4 mb-3 ml-1" disabled>Registar</button>
              </div>
            </form>
            <hr>
            <img src="../assets/ipplogo.png" id="logo" alt="" class="img-fluid mt-5 mb-4">
            <small class="form-text mt-3">Escola Superior de Hotelaria e Turismo</small>
            <small class="form-text">Rua D. Sancho I, n.º 981</small>
            <small class="form-text">4480-876 Vila do Conde</small>
            <small class="form-text pb-1">Portugal</small>
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
</style>