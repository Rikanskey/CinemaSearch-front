<template xmlns="http://www.w3.org/1999/html">
  <div id="app">
<!--        <img src="./assets/check.jpg">-->
<!--        <link href="css/MainPageStyles.css" rel="stylesheet">-->
<!--       <div class="style_bg_image"></div>-->
<!--        <div class="content_container">-->
<!--          <div class="style_welcome_head__container">-->
<!--            <div class="style_welcome_head__style">-->
<!--              <h1 class="style_welcome_head__title style_welcome_head__title_margin">MovieBlog</h1>-->
<!--              <h2 class="style_welcome_head__text">The best resource about world of cinema</h2>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="style_random_button__container">-->
<!--            <button class="myButton">Random Movie</button>-->
<!--          </div>-->
<!--          <div class="style_top_5__container">-->
<!--            <h2 class="style_welcome_head__style style_welcome_head__text">Top 5 movies</h2>-->
<!--            <div class="style_top_5__poster_container">-->
<!--              <div class="styles_posterColumn__width">-->
<!--                <img class="film-poster styles_pic__size styles_pic__back image"-->
<!--                     src="https://images-na.ssl-images-amazon.com/images/I/71W2aEcrxxL._AC_SL1334_.jpg" alt="">-->
<!--              </div>-->
<!--              <div class="styles_posterColumn__width">-->
<!--                <img class="film-poster styles_pic__size styles_pic__back image"-->
<!--                     src="https://images-na.ssl-images-amazon.com/images/I/71W2aEcrxxL._AC_SL1334_.jpg" alt="">-->
<!--              </div>-->
<!--              <div class="styles_posterColumn__width">-->
<!--                <img class="film-poster styles_pic__size styles_pic__back image"-->
<!--                     src="https://images-na.ssl-images-amazon.com/images/I/71W2aEcrxxL._AC_SL1334_.jpg" alt="">-->
<!--              </div>-->
<!--              <div class="styles_posterColumn__width">-->
<!--                <img class="film-poster styles_pic__size styles_pic__back image"-->
<!--                     src="https://images-na.ssl-images-amazon.com/images/I/71W2aEcrxxL._AC_SL1334_.jpg" alt="">-->
<!--              </div>-->
<!--              <div class="styles_posterColumn__width">-->
<!--                <img class="film-poster styles_pic__size styles_pic__back image"-->
<!--                     src="https://images-na.ssl-images-amazon.com/images/I/71W2aEcrxxL._AC_SL1334_.jpg" alt="">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      image: "./assets/check.jpg"
      // bgImage: "./assets/check.jpg"
    };
  }
}
</script>


<style scoped>
.style_bg_image {
  background: url("/frontend/assets/check.jpg");
  backdrop-filter: blur(2px);
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

div {
  display: block;
}

.content_container {
  height: 100vh;
  margin-left: 80px;
  margin-right: 80px;
  background: linear-gradient(90deg, rgba(0,0,0,1) 28%, rgb(215, 13, 13) 99%);
}

/* welcome head */
.style_welcome_head__container{
  display: flex;
  flex-direction: column;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  text-align: center;
}

.style_welcome_head__style{
  margin-top: 20px;
  color: white;
  font-family: Arial,Tahoma,Verdana,sans-serif;
  font-style: oblique;
  -webkit-text-stroke: 2px rgb(0, 0, 0);
}

.style_welcome_head__title {
  font-size: 90pt;
}

.style_welcome_head__title_margin {
  margin-bottom: 15px;
}

.style_welcome_head__text {
  font-size: 50pt;
}

/* button */
.style_random_button__container {
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: center;
}

.myButton {
  box-shadow: 0 1px 0 0 #fff6af;
  background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color:#ffec64;
  border-radius:13px;
  border:3px solid #ffaa22;
  display:inline-block;
  cursor:pointer;
  color:#333333;
  font-size:50px;
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

/* top-5 */
.style_top_5__container {
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  text-align: center;
}

.style_top_5__poster_container {
  flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
}

.styles_posterColumn__width {
  display: inline-block;
  width: 240px;
  padding-left: 50px;
  padding-right: 50px;
}

.styles_pic__size {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  min-width: 100%;
  min-height: 320px;
  white-space: nowrap;
  text-indent: 100%;
  border-radius: 3px;
  object-fit: cover;
}


.styles_pic__back {
  background: hsla(0,0%,90.2%,.5);
}
</style>