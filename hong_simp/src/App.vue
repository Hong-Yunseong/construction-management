<template>
  <MainHeader/>
  <MainContent/>
  <MainFooter/>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainContent from './components/MainContent.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader, MainContent, MainFooter
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
