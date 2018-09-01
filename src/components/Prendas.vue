<template>
  <div id="prendas">
    <b-container>
      <b-row>
        <b-col cols="12" class="text">
          <h1>{{ title }}</h1>
          <p class="homeText">{{ homeText1 }}</p>
          <p class="homeText">{{ homeText2 }}</p>
          <p class="homeText">{{ homeText3 }}</p>
          <p class="homeText">{{ homeText4 }}</p>
          <p class="homeText">{{ homeText5 }}</p>
        </b-col>
      </b-row>
    </b-container>
    </b>
  </div>
</template>


<script>

export default {
  name: 'prendas',
  data () {
    return {
      title: "Prendas",
      homeText1: "Tema delicado este, no entado aqui vamos nós tentar atacalo da melhor maneira possível.",
      homeText2: "É verdade! Estamos quase a concretizar um dos maiores sonhos da nossa vida: casar, ao fim destes longos 10 anos de relação aqui nos encontramos para finalmente darmos o nó. Para além disso estamos neste momento em processo de compar a nossa primeira casa, e... também é verdade que estamos lisos!",
      homeText3: "No entanto a vida não acaba porque não temos dinheiro, alias para nós começa e não poderiamos estar mais contentes isso.",
      homeText4: "Deixamos o nosso NIB, à descrição, para que possam usar e abusar com qualquer ajuda que queiram dar.",
      homeText5: "Obrigado"
    }
  }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');

#prendas{
  font-family: 'Montserrat', 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: 60%;
  background-size: cover;
  background-color: #white;
  height: 100vh;
  border: 1px solid white;
  color: #333;
  background-color: white;
  padding: 0;
  overflow-x: hidden;
}

.text {
  background-color: white;
  height: 80vh;
  margin-top: 5%;
  padding: 0 10%;
}

h1 {
  font-weight: 300;
  font-size: 2.5em;
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

