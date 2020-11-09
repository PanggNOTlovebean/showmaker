<template>
  <div id="app">
  <!-- <BarChart></BarChart> -->
  <my-bar-chart-vue></my-bar-chart-vue>
  <!-- <word-cloud></word-cloud> -->
  <!-- <WordCloud></WordCloud> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BarChart from './components/BarChart.vue'
import MyBarChartVue from './components/MyBarChart.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,BarChart,MyBarChartVue
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
