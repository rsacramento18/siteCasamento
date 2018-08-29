<template>
  <b-container fluid id="home">
    <b-row>
      <b-col cols="1">
      </b-col>
      <b-col cols="6" class="text">
        <h1>{{ title }}</h1>
        <p class="homeText">{{ homeText1 }}</p>
        <p class="homeText">{{ homeText2 }}</p>
        <p class="homeText">{{ homeText3 }}</p>
      </b-col>
      <b-col cols="4" class="backpane">
      </b-col>
      <b-col cols="1">
      </b-col>
    </b-row>
  </b-container>
  </b>
</template>


<script>

export default {
  name: 'home',
  data () {
    return {
      title: "Home",
      homeText1: '"Todos os dias vemos pessoas apressadas de manhã, comboio, no metro, nos seus carros, todas com tumos e objectivos diferentes.',
      homeText2: "Há 10 anos, 11 de abril de 2008, que juntamos o nosso caminho, deixamos de ser 2 para 1, e os nossos objectivos tornaram-se um só.",
      homeText3: 'A 27 de Outubro deste mesmo ano temos o prazer de vos convidar para assistir a esse objectivo, porque todos os dias vemos pessoas apressadas a correr, mas hoje nós corremos como um."'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');

#home{
  font-family: 'Montserrat', 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background-color: white;
  padding: 0;
  overflow-x: hidden;
}

.text {
  margin: auto 0;
  padding: 0 5%;
}

h1 {
  font-weight: 300;
  font-size: 1.9em;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
}

p {
  font-weight: 300;
  font-style: italic;
  font-size: 1.4em;
  text-align: left;
  padding-top: 40px;
}

.backpane{
  background: url('../assets/4.jpg');
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: 55%;
  background-size: 250%;
  background-color: #white;
  height: 100vh;
  border: 1px solid white;
  margin: 5% 0;
}


</style>
