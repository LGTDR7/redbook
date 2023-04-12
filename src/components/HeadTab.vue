
<template>
   <div class="headtab">
        <div class="head">
        <div class="left">
            <i class="iconfont icon-jiaqiangban"></i>
        </div>
        <div class="center">
            <span v-for="(item,index) in list" 
            :key="item"
            :class="{active:currentindex==index,normal:!currentindex==index}"
            @click="changetab(index)">{{item}}</span>
        </div>
    </div>
    <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="大家都在搜">
    </div>
    <div class="nav">
<span v-for="item in navlist"
:key="item"
>
    {{item}}
</span>
    </div>
   </div>
</template>
<script>
import '../icon/iconfont.css'

import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'HeadTab',
  components:{
    
  },
  setup(){
      const list=['关注','推荐','广州'];
      const navlist=['运动','游戏','穿搭','旅游','vlog']
      let currentindex=ref(0);
      const changetab=(index)=>{
          console.log(index);
          currentindex.value=index;
          console.log(currentindex);
      }
       
      return{
          list,
          currentindex,
          changetab,
          navlist
      }
  }
})
  

</script>
<style scoped>

.headtab{
    width: 100%;
    background-color: #fff;
    z-index: 9;
    position: relative;
   padding: 0px;
}
.head{
    display: flex;
}
.left{
    height: 30px;
    width: 30px;
}
.center{
    flex: 1;
    text-align: center;
}
.normal{
    font-size: 20px;
    color: rgb(138, 138, 138);
    margin-right:15px ;
}
.active{
    font-size: 22px;
    color: rgb(29, 29, 29);
    border-bottom: red solid 2px;
    margin-left: 20px;
    margin-right:20px ;
}
.search{
    width: 98%;
    position: relative;
    height: 30px;
    margin-top: 20px;
    text-align: center;
    
}
.search input{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    text-align: center;
    background-color: rgb(236, 236, 236);
}
.search i{
    position: absolute;
    left: 30%;
    top: 30%;
}
.nav{
    display: flex;
    height: 30px;
    line-height: 30px;
    background-color: rgb(236, 236, 236);
    margin-top: 10px;
}
.nav span{
    flex: 1;
    margin-left: 10px;
}
</style>