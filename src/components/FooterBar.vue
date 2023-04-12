<template>
    <div class="foot">
        <span v-for="(item,index) in footlist"
        :key="item"
        :class="{active:index==current}"
        @click="change(index)"
        >{{item}}</span>
        <i class="iconfont icon-icon_tianjia"></i>
    </div>
</template>
<script>
import '../icon/iconfont.css'

import {defineComponent,ref} from 'vue';
export default defineComponent({
  name: 'FootBar',
  components:{
    
  },
  setup(){
      const footlist=['首页','商城','消息','我'];
      const current=ref(0);
      const change=(index)=>{
          current.value=index;
      }
      return{
          footlist,
          change
      }
  },
  
})
</script>
<style scoped>
.foot{
    width: 100vw;
    height: 40px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
}
.foot span{
    flex: 1;
    color: gray;
    text-align: center;
}
.foot i{
    position: absolute;
    font-size: 20px;
    color: red;
    left: 48%;
}
.active{
    color: black;
}
</style>