<template>
  <b-container fluid id="logo">
    <b-row>
      <b-col cols="12">
        <h1 class="title">{{ title }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="backpane">
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="nav">
        <ul>
          <li><a href="#home" >{{ nav1 }}</a></li>
          <li><a href="#planeamento" >{{ nav2 }}</a></li>
          <li><a href="#prendas" >{{ nav3 }}</a></li>
          <li><a href="#" target="_blank">{{ nav4 }}</a></li>
          <li><a href="#" target="_blank">{{ nav5 }}</a></li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
  </b>
</template>


<script>
export default {
  name: 'logo',
  data () {
    return {
      title: "Carolina & Ricardo",
      nav1: "Home",
      nav2: "Quando e Onde",
      nav3: "Prendas",
      nav4: "A nossa história",
      nav5: "Até já"
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');

#logo {
  font-family: 'Montserrat', 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background-color: white;
  padding: 0;
  overflow-x: hidden;
}

.backpane{
  background: url('../assets/17.jpg');
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: cover;
  background-color: #464646;
  height: 50vh;
  border: 1px solid white;
}

h1 {
  font-weight: 300;
  font-size: 2.5em;
  text-align: left;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.nav {
  height:25vh;
  background: white;
}

ul {
  margin: auto;
}

ul li {
  display: inline-block;
}

.nav li + li:before {
  content: ' | ';
}

ul li a {
  color: #333;
  font-weight: 400;
  font-size: 1em;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.title {
  text-align: center;
  margin: 5% 0;
}
</style>
