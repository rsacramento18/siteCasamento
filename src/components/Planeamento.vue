<template>
  <div id="planeamento">
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="backpane1">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="text">
          <h1>{{ title }}</h1>
          <p class="homeText">{{ homeText1 }}</p>
          <p class="homeText">{{ homeText2 }}</p>
          <p class="homeText">{{ homeText3 }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="backpane2">
        </b-col>
      </b-row>
    </b-container>
    </b>
  </div>
</template>


<script>

export default {
  name: 'planeamento',
  data () {
    return {
      title: "Onde e Quando",
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

#planeamento{
  font-family: 'Montserrat', 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100vh;
  border: 1px solid white;
  color: #333;
  background-color: white;
  padding: 0;
  overflow-x: hidden;
}

.backpane1 {
  background: url('../assets/12.jpg');
  background-repeat: no-repeat;
  background-size: 75%;
  background-size: 127%;
  background-position-y: -726px;
  background-position-x: -499px;
  background-color: #white;
  height: 23vh;
}

.text {
  background-color: white;
  height: 50vh;
  padding: 0 10%;
}

h1 {
  font-weight: 300;
  font-size: 1.9em;
  text-align: center;
  margin-top: 40px;
  text-transform: uppercase;
  letter-spacing: 3px;
}


p {
  font-weight: 300;
  font-size: 1.4em;
  text-align: left;
  padding-top: 40px;
}

</style>
