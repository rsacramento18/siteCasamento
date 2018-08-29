<template>
  <div id="app">
    <logo></logo>
    <home></home>
    <planeamento></planeamento>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Home from '@/components/Home'
import Planeamento from '@/components/Planeamento'

export default {
  name: 'app',
  components : {
    Logo,
    Home,
    Planeamento
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
