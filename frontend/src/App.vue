<template>
  <div id="app">
    <header>
      <nav class="styles_header__props styles_headerContainer__color" style="--header-height:108px">
          <div class="styles_header__inner_props">
            <div class="styles_header_width_height">
              <div class="styles_position__logo_Header">
                <router-link class="styles_font__logo_Header" v-bind:to="{name: 'Home'}">MovieBlog</router-link>
                <router-link v-if="!user.isAuth() && $router.currentRoute.path !== '/auth'" class="styles_font__signIn_Header styles__signIn_Button" v-bind:to="{name: 'AuthReg'}">Sign In</router-link>
                <div v-else-if="user.isAuth()" class="styles_font__signIn_Header styles__signIn_Button">
                  <div class="styles_font__signIn_Header styles__profile_logout_Button" v-on:click="user.logout()">Logout</div>
                  <router-link class="styles_font__signIn_Header styles__profile_logout_Button" to="/profile/{user.id}">Profile</router-link>
                </div>
              </div>
            </div>
          </div>
      </nav>
    </header>

    <main role="main">
      <router-view/>
    </main>

    <footer class="container styles_footer__props styles_headerContainer__color">
      <div class="styles_footer__font">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>&copy; 2020 BSTU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
import User from "./components/user/user";

export default {
  name: 'app',
  data(){
    return{
      user: User
    };
  }
}
</script>


<style>
html, body{
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.styles_header__props {
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  min-width: 1024px;
  font-family: Arial,Tahoma,Verdana,sans-serif;
  -webkit-font-smoothing: antialiased;
}

.styles_headerContainer__color {
  background: linear-gradient(90deg, rgba(0,0,0,1) 28%, rgb(215, 13, 13) 99%);
}

.styles_header__inner_props {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  display: inline-block;
  width: 100%;
}

.styles_header_width_height {
  width: 100%;
  height: 54px;
}

.styles_position__logo_Header{
  margin-top: 15px;
  margin-left: 15px;
  flex-direction: column;
}

.styles_font__logo_Header{
  font-style: oblique;
  font-weight: 800;
  -webkit-text-stroke: 2px rgb(164, 106, 8);
  font-size: 30pt;
  color: white;
}

.styles_font__signIn_Header{
  margin-right: 10px;
  float: right;
}

.styles_footer__props {
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  width: 100%;
  min-width: 1024px;
  font-family: Arial,Tahoma,Verdana,sans-serif;
  -webkit-font-smoothing: antialiased;
}

.styles_footer__font {
  font-style: oblique;
  font-weight: 800;
  -webkit-text-stroke: 2px rgb(164, 106, 8);
  color: white;
}

/* Buttons */
.styles__signIn_Button {
  background:unset;
  display:inline-block;
  cursor:pointer;
  color: #545454;
  font-size:20px;
  font-weight:bold;
  padding:9px 31px;
  text-decoration:none;
}

.styles__profile_logout_Button {
  background:unset;
  display:inline-block;
  cursor:pointer;
  color: #545454;
  font-size:20px;
  font-weight:bold;
  padding:6px 20px;
  text-decoration:none;
}

.styles__profile_logout_Button:hover {
  color: #262626;
}

.styles__signIn_Button:hover {
  color: #262626;
}
</style>