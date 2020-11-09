<template>
  <div id="app">
  <BarChart></BarChart>
  <!-- <word-cloud></word-cloud> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BarChart from './components/BarChart.vue'
import WordCloud from './components/WordCloud.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,BarChart,WordCloud
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
