<template>
  <div id="app">
    <ul id="nav">
      <li>
        <router-link to="/films"><img v-if="'/films/nowPlaying'===$route.path||'/films/comingSoon'===$route.path" src="./assets/movieA.png"><img v-else src="./assets/movie.png"> <p>电影</p> </router-link>
      </li>
      <li>
        <router-link to="/cinemas"><img v-if="'/cinemas'===$route.path" src="./assets/cinemaA.png"><img v-else src="./assets/cinema.png"> <p>影院</p> </router-link>
      </li>
      <li>
        <a href="https://m.sdyxmall.com/act/active/wnIRqR340378"><img src="./assets/odds.png"> <p>特惠</p> </a>
      </li>
      <li>
        <router-link to="/center"><img v-if="'/center'===$route.path" src="./assets/myA.png"> <img v-else src="./assets/my.png"> <p>我的</p></router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style>
@import './assets/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ededed;
  background: #ffffff;
  z-index: 100;
}

#nav li{
  flex: 1;
}

#nav img{
  width: 0.42rem;
  padding-top: 8px; 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  height: 100%;
  width: 100%;
}



#nav a.router-link-active {
  color: #ff5f16;
}
</style>
