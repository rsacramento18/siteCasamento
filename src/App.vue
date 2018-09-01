<template>
  <div id="app">
    <logo></logo>
    <home></home>
    <planeamento></planeamento>
    <prendas></prendas>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Home from '@/components/Home'
import Planeamento from '@/components/Planeamento'
import Prendas from '@/components/Prendas'

export default {
  name: 'app',
  components : {
    Logo,
    Home,
    Planeamento,
    Prendas
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');

#app {
  font-family: 'Monterrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

</style>
