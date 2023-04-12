<template>
  
 <div class="app">
    <head-tab></head-tab>
    <container-bar></container-bar>
<foot-bar></foot-bar>
 </div>
</template>

<script>
import HeadTab from './components/HeadTab.vue'
import FootBar from './components/FooterBar.vue'
import ContainerBar from './components/ContainerBar.vue'
import {defineComponent} from 'vue';


export default defineComponent({
  name: 'App',
  components:{
    HeadTab,FootBar,ContainerBar
  },
  setup(){
   
      return{
        
      }
  }
})
</script>

<style>
.app {
  height: 100vh;
}
body{
   padding: 0;
    margin: 0;
}
.foot{
  position: fixed;
  bottom: 0;
}
</style>
