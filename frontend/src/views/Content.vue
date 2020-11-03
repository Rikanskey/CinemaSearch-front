<template>
  <div class="styles_root__main_container">
    <div class="styles_contentContainer__main_props">
      <div class="styles_сontainer__props">
        <div class="styles_container__props_margin">
          <div class="styles_posterColumn__width styles_column__el_position">
            <div class="styles_poster__position">
              <div class="styles_poster__pic_padding">
                <a>
                  <img class="film-poster styles_pic__size styles_pic__back image"
                       v-bind:src="movie.poster" alt>
                </a>
              </div>
            </div>
          </div>
          <div class="styles_column__el_position styles_info_container__pos">
            <div class="styles_container_info__padding">
              <div class="styles_container__props_margin">
                <div class="styles_title__pos">
                  <h1 class="styles_title__margin styles_title__font styles_title__color" itemprop="name">{{movie.name}}</h1>
                </div>
              </div>
              <div class="styles_container__props_margin">
                <div class="styles_column__el_position styles_info__pos">
                  <h3 class="styles_title_info__pos styles_title_info__font_size styles_title_info__font_style styles_title__color">
                    About Movie
                  </h3>
                  <div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Year</div>
                      <div class="styles_value__props">{{movie.release.year}}</div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Country</div>
                      <div v-for="country in movie.country" :key="country.id">
                        <div v-if="movie.country.indexOf(country) !== movie.country.length-1">
                          <div class="styles_value__props">{{country.name}},</div>
                        </div>
                        <div v-else>
                          <div class="styles_value__props">{{country.name}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Genre</div>
                      <div v-for="genre in movie.genre" :key="genre.id">
                        <div v-if="movie.genre.indexOf(genre) !== movie.genre.length-1">
                          <div class="styles_value__props">{{genre.name}},</div>
                        </div>
                        <div v-else>
                          <div class="styles_value__props">{{genre.name}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Director</div>
                      <div v-for="director in movie.director" :key="director.id">
                        <div v-if="movie.director.indexOf(director) !== movie.director.length-1">
                          <div class="styles_value__props">{{director.name}},</div>
                        </div>
                        <div v-else>
                          <div class="styles_value__props">{{director.name}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Writer</div>
                      <div v-for="writer in movie.writer" :key="writer.id">
                        <div v-if="movie.writer.indexOf(writer) !== movie.writer.length-1">
                          <div class="styles_value__props">{{writer.name}},</div>
                        </div>
                        <div v-else>
                          <div class="styles_value__props">{{writer.name}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Producer</div>
                      <div v-for="producer in movie.producer" :key="producer.id">
                        <div v-if="movie.producer.indexOf(producer) !== movie.producer.length-1">
                          <div class="styles_value__props">{{producer.name}},</div>
                        </div>
                        <div v-else>
                          <div class="styles_value__props">{{producer.name}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Operator</div>
                      <div v-for="operator in movie.operator" :key="operator.id">
                        <div v-if="movie.operator.indexOf(operator) !== movie.operator.length-1">
                          <div class="styles_value__props">{{operator.name}},</div>
                        </div>
                        <div v-else>
                          <div class="styles_value__props">{{operator.name}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Compositor</div>
                      <div v-for="compositor in movie.compositor" :key="compositor.id">
                        <div v-if="movie.compositor.indexOf(compositor) !== movie.compositor.length-1">
                          <div class="styles_value__props">{{compositor.name}},</div>
                        </div>
                        <div v-else>
                          <div class="styles_value__props">{{compositor.name}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Budget</div>
                      <div class="styles_value__props">{{movie.budget}} $</div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Box office</div>
                      <div class="styles_value__props">{{ movie.box_office }} $</div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Release</div>
                      <div class="styles_value__props">{{movie.release.day}} {{movie.release.month}} {{movie.release.year}}</div>
                    </div>
                    <div class="styles_rowInformation__color styles_rowInformation__position">
                      <div class="styles_title__props">Duration</div>
                      <div class="styles_value__props">{{movie.duration}}</div>
                    </div>
                  </div>
                </div>
                <div class="styles_column__el_position styles_actors__pos">
                  <div class="styles_actors__pad ">
                    <h3 class="styles_actors_title__margin styles_title_info__font_style styles_title__color">
                      Starring
                    </h3>
                    <ul class="styles_actor_list__margin">
                          <li class="styles_actor__props" v-bind:key="star.id" v-for="star in movie.starring">{{star.name}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="styles_container__back styles_container__disp">
        <div class="styles_сontainer__props">
          <h3 class="styles_actors_title__margin styles_title_info__font_style styles_title__color">Synopsis</h3>
          <div class="styles_synopsis__font">
            <p>{{movie.synopsis}}</p>
          </div>
        </div>
      </div>
      <div class="styles_raiting__marg styles_сontainer__props">
        <h3 class="styles_actors_title__margin styles_title_info__font_style styles_rootDark__QT0qE">Raiting</h3>
        <form class="styles_form__disp " id="star_list">
          <label class="styles_radio__star_container styles_root__star_container"  v-bind:key="index" v-for="index in 10" v-bind:data-value=index>
            <input type="radio" class="styles_input__disp" name="star" v-bind:value="index" v-on:click="send_mark(index)">
            <span class="styles_iconContainer__pos" @mouseover="over_star(index)" @mouseleave="out_star()">
              <span v-if="index <= movie.rating && actual_mark === 0" class="styles_icon__marg styles_defaultIcon__star styles_baseIcon__star styles_filledIcon__star"></span>
              <span v-else-if="index <= actual_mark" class="styles_icon__marg styles_defaultIcon__star styles_baseIcon__star styles_hoveredIcon__star"></span>
              <span v-else class="styles_icon__marg styles_defaultIcon__star styles_baseIcon__star styles_defaultIcon__star"></span>
            </span>
          </label>
        </form>
        <div v-if="user.isAuth() && movie.user_mark !== 0">Ваша оценка {{movie.user_mark}}</div>
      </div>
      <div class="styles_raiting_container__margin styles_container__back styles_container__disp">
        <div class="styles_сontainer__props">
          <h3 class="styles_actors_title__margin styles_title_info__font_style styles_title__color">Trailer</h3>
          <div class="styles_trailerContainer__margin_align">
            <iframe width="560" height="315" v-bind:src=movie.trailer allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../components/user/user";
export default {
  name: "Content",
  methods: {
    send_mark(mark){
      console.log('Отправлена оценка ' + mark)
      this.movie.user_mark = mark
    },
    over_star(star_index){
      this.actual_mark = star_index
    },
    out_star(){
      this.actual_mark = 0
    }
  },
  data() {
  return{
      user: User,
      actual_mark: 0,
      movie: {
        name: 'TENET',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/71W2aEcrxxL._AC_SL1334_.jpg',
        release: {
          day: 3,
          month: 'September',
          year: 2020
        },
        country: [
          {
            id: 1,
            name: 'Great Britain'
          },
          {
            id: 2,
            name: 'USA'
          }
        ],
        genre: [
          {
            id: 1,
            name: 'Fantasy'
          },
          {
            id: 2,
            name: 'Action'
          }
        ],
        director: [
          {
            id: 1,
            name: 'Christopher Nolan'
          }
        ],
        writer: [
          {
            id: 1,
            name: 'Christopher Nolan'
          }
        ],
        producer: [
          {
            id: 2,
            name: 'Ivo Felt'
          },
          {
            id: 3,
            name: 'Thomas Hayslip'
          },
          {
            id: 1,
            name: 'Christopher Nolan'
          }
        ],
        operator: [
          {
            id: 4,
            name: 'Hoyte Van Hoytema'
          }
        ],
        compositor: [
          {
            id: 5,
            name: 'Ludwig Gorannson'
          }
        ],
        starring: [
          {
            id: 6,
            name: 'John David Washington'
          },
          {
            id: 7,
            name: 'Robert Pattinso'
          },
          {
            id: 8,
            name: 'Elizabeth Debicki'
          }
        ],
        budget: 205000000,
        box_office: 300000000,
        duration: '2:30:00',
        synopsis: 'Armed with only one word—Tenet—and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.\n' +
            '\n' +
            'Not time travel. Inversion.',
        rating: 8.5,
        trailer: 'https://www.youtube.com/embed/L3pk_TBkihU',
        user_mark: 1
      }
    }
  }
}
</script>

<style>
div {
  display: block;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
}

.styles_root__main_container {
  z-index: 1;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-height: 100vh;
  background: #f4f4f4;
}

.styles_contentContainer__main_props {
  z-index: 2;
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  background: #fff;
  width: 1280px;
  margin: auto;
}

.styles_сontainer__props {
  box-sizing: border-box;
  width: 100%;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
}

.styles_container__props_margin {
  display: flex;
  box-sizing: border-box;
  margin-right: -10px;
  margin-left: -10px;
}

.styles_posterColumn__width {
  flex: 0 0 240px;
  width: 240px;
}

.styles_column__el_position {
  display: block;
  box-sizing: border-box;
  max-width: 100%;
  padding-right: 10px;
  padding-left: 10px;
}

.styles_poster__position {
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  flex: 1 1;
  min-height: 624px;
  padding: 40px 0 60px;
}

.styles_poster__pic_padding {
  position: relative;
  margin-bottom: 20px;
}

.styles_pic__size {
  display: block;
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

.styles_info_container__pos {
  -webkit-box-flex: 0;
  flex: 0 0 600px;
  width: 600px;
}

.styles_container_info__padding {
  position: relative;
  -webkit-box-orient: vertical;
  flex-direction: column;
  padding: 40px 0 60px;
}

.styles_title__pos {
  margin-bottom: 32px;
  padding-top: 15px;
}

.styles_title__margin {
  margin-top: 0;
  margin-bottom: 15px;
}

.styles_title__font {
  font-family: Arial,Tahoma,Verdana,sans-serif;
  font-size: 36px;
  font-weight: 600;
}

.styles_title__color {
  color: #1f1f1f;
}

.styles_info__pos{
  flex: 0 0 440px;
  width: 440px;
}

.styles_title_info__pos {
  margin-bottom: 5px;
}

.styles_title_info__font_size {
  font-size: 18px;
}

.styles_title_info__font_style {
  margin-top: 0;
  font-family: Arial,Tahoma,Verdana,sans-serif;
  font-weight: 600;
}

.styles_rowInformation__color {
  border-bottom-color: rgba(31,31,31,.1);
}

.styles_rowInformation__position {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid;
}

.styles_title__props {
  width: 156px;
  font-family: Arial,Tahoma,Verdana,sans-serif;
  font-size: 13px;
  color: rgba(31,31,31,.5);
}

.styles_value__props {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1 1;
  padding-right: 2pt;
  font-family: Arial,Tahoma,Verdana,sans-serif;
  font-size: 13px;
  color: #1f1f1f;
}

.styles_actors__pos{
  -webkit-flex: 0 0 200px;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
  width: 200px;
}

.styles_actors__pad {
  padding-top: 4px;
  margin-bottom: 24px;
}

.styles_actors_title__margin {
  margin-bottom: 15px;
}

.styles_actor_list__margin {
  margin-top: 0;
  margin-bottom: 12px;
  padding-left: 0;
}

.styles_actor__props {
  list-style: none;
  line-height: 15px;
}

.styles_actor__props:not(:last-child) {
  margin-bottom: 7px;
}

/* review */
.styles_container__back {
  background-color: #fff;
}

.styles_container__disp {
  position: relative;
  display: flex;
  box-sizing: border-box;
}

.styles_synopsis__font {
  font-family: Arial,Tahoma,Verdana,sans-serif;
  font-size: 16px;
  line-height: 1.38;
  color: #393939;
}

p{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

/* rating section */
.styles_raiting_container__margin {
  position: relative;
}

.styles_raiting__marg:not(:empty) {
  margin-top: 32px;
  margin-bottom: 32px;
}

.styles_form__disp {
  display: flex;
}

.styles_radio__star_container {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}

.styles_radio__star_container:first-of-type {
  padding-left: 0;
}

.styles_root__star_container {
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  background: 0 0;
}

.styles_input__disp {
  display: none;
}

.styles_iconContainer__pos {
  position: relative;
}

.styles_icon__marg {
  margin: auto;
}

.styles_baseIcon__star {
  display: block;
  width: 32px;
  height: 32px;
  background-position: 0 0;
  background-size: 32px 32px;
}


.styles_defaultIcon__star {
  background-image: url("../assets/Empty_star.png");
}

.styles_filledIcon__star {
  background-image: url("../assets/Full_star.png");
}

.styles_hoveredIcon__star {
  background-image: url("../assets/Hovered_star.png");
}

.styles_root__star_container:after {
  margin-top: 4px;
  font-family: Arial,Tahoma,Verdana,sans-serif;
  font-size: 13px;
  content: attr(data-value);
  color: rgba(0,0,0,.2);
}

.styles_trailerContainer__margin_align{
  margin-left: 50px;
  margin-bottom: 32px;
}
</style>