<template>
  <div class="styles_bg styles_page">
  <div class="myFont">
  <div>
    <h1 class="welcome">Welcome to MovieBlog</h1>
  </div>
  <form class="form-signin">
      <div v-if="current_state === 1">
        <div class="input_box">
          <div class="input">
            <label for="inputEmail">Login</label>
            <input type="text" id="inputEmail" v-model="login" class="form-control" style="margin-left: 3px" placeholder="Login" required autofocus>
          </div>
          <div class="input">
            <label for="inputPassword">Password</label>
            <input type="password" id="inputPassword" v-model="password" class="form-control" style="margin-left: 3px"  placeholder="Password" required>
          </div>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="myButton" type="submit" v-on:click="signIn_button_clicked">Sign in</button>
        <button class="myButton" type="button" v-on:click="create_acc_button_clicked">Create account</button>
        </div>
      <div v-else>
        <div class="input_box">
          <div class="input">
            <label for="inputEmail">Login</label>
            <input type="text" id="inputNewEmail" class="form-control" style="margin-left: 3px" placeholder="Login" required autofocus>
          </div>
          <div class="input">
            <label for="inputPassword">Password</label>
            <input type="password" id="inputNewPassword" class="form-control" style="margin-left: 3px"  placeholder="Password" required>
          </div>
          <div class="input">
            <label for="inputPassword">Repeat Password</label>
            <input type="password" id="inputNewPasswordRepeat" class="form-control" style="margin-left: 3px"  placeholder="Password" required>
          </div>
        </div>
        <button class="myButton" type="submit" v-on:click="back_button_clicked">Back</button>
        <button class="myButton" type="button" v-on:click="registration_button_clicked">Registration</button>
      </div>
  </form>
  </div>
  </div>
</template>

<script>
import user from "../components/user/user";
export default {
  name: "AuthReg",
  methods: {
    create_acc_button_clicked(){
      this.current_state = 2
    },
    back_button_clicked(){
      this.current_state = 1
    },
    registration_button_clicked(){
      //some ajax
    },
    signIn_button_clicked(){
      if (this.validate()){
        const result = {
          login: 'user',
          accessToken: 'a123'
        }
        user.auth(result)
      }
    },
    validate(){
      this.errors = {}
      if (this.login.trim().length === 0) {
        this.errors.email = 'Заполните Email.'
      }
      if (this.password.trim().length === 0) {
        this.errors.password = 'Заполните Пароль.'
      }
      return Object.keys(this.errors).length === 0
    }
  },
  data(){
    return {
      login: '',
      password: '',
      errors: {},
      current_state: 1
    }
  }
}
</script>

<style>

.styles_page {
  min-height: 1080px;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

.styles_bg {
  background: url("https://afishanovgorod.ru/wp-content/uploads/2018/08/kino-2-1.jpg"),
  center, no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}

.myFont {
  font-style: oblique;
  font-weight: 800;
}

/* Welcome to Movieblog*/
.myFont .welcome{
  /*border-color: #000000;*/
  text-align: center;
  -webkit-text-stroke: 2px rgb(164, 106, 8);
  font-size: 60pt;
  color: white;
}


/* Auth block */
.form-signin {
  width: 100%;
  max-width: 370px;
  padding-top: 155px;
  margin: auto;
  font-size: 14pt;
  -webkit-text-stroke: 0.05mm rgb(169, 6, 6);
}

.form-signin .input_box{
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 15px;
}

.form-signin .input_box .input{
  flex-grow: 100;
  padding: 5px;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
}

.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

/* Buttons */
.myButton {
  box-shadow: 0 1px 0 0 #fff6af;
  background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color:#ffec64;
  border-radius:13px;
  border:3px solid #ffaa22;
  display:inline-block;
  cursor:pointer;
  color:#333333;
  font-size:20px;
  font-weight:bold;
  padding:9px 31px;
  text-decoration:none;
  text-shadow:0 1px 0 #ffee66;
}
.myButton:hover {
  background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color:#ffab23;
}
.myButton:active {
  position:relative;
  top:1px;
}

</style>