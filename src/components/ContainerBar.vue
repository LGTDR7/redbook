<template>
    <div class="containbar">
        <div class="contain">
        <ul class="left">
<li v-for="item in leftlist"
:key="item"
>
<img :src="item.img" alt="" @load="debounce">
<div class="title"><h3>{{item.title}}</h3></div>
<div class="info">
    <span><i class="iconfont icon-qiatongtouxiang"></i>{{item.author}}</span>
    <span><i class="iconfont icon-xiai"></i>{{item.like}}</span>
</div>
</li>
        </ul>
    <ul class="right">
        <li v-for="item in rightlist"
:key="item"
>
<img :src="item.img" alt="" @load="debounce">
<div class="title"><h3>{{item.title}}</h3></div>
<div class="info">
    <span><i class="iconfont icon-qiatongtouxiang"></i>{{item.author}}</span>
    <span><i class="iconfont icon-xiai"></i>{{item.like}}</span>
</div>
</li>
    </ul>
    </div>
    </div>
</template>
<script>
import {defineComponent,onMounted,ref} from 'vue';
import axios from 'axios'
import Bscroll from 'better-scroll'
export default defineComponent({
  name: 'ContainerBar',
  components:{
    
  },
  setup(){
      let tabledata=ref([]);
      let bscroll={};
      let leftlist=ref([]);
      let rightlist=ref([]);
      const getdata=async()=>{
          const res=await axios.get('/getData');
          console.log(res);
          leftlist.value=res.data.leftdata;
          rightlist.value=res.data.rightdata;
      };
      const wrapWidth = ref(0); // 瀑布的wrap的宽度
      
      
      onMounted(()=>{
              getdata();
              wrapWidth.value = document.querySelector(".containbar").clientWidth;
    bscroll = new Bscroll(document.querySelector('.containbar'), {
     scrollY: true,
     probeType: 3,
     click: true,
     pullUpLoad: true,
     mouseWheel: true
   })
   bscroll.on("pullingUp", () => {
        getmoredata()
      });
        
          })
          const getmoredata=async()=>{
              console.log(1);
              let res=await axios.get('/getData');
              leftlist.value.push(...res.data.leftdata);
              rightlist.value.push(...res.data.rightdata);
        bscroll.finishPullUp();
          }
          const debounce=()=>{
              bscroll.refresh()
              };
         
      return{
         getdata,
         tabledata,
         leftlist,
         rightlist,
         debounce,
         bscroll,
         getmoredata
      }
  },
  
})
</script>
<style scoped>
.containbar{
    height: 60vh;
}
.contain{
    
    display: flex;
    justify-content: space-around;
    
}
.contain ul{
    flex: 1;
    padding-left: 5px;
}
.right{
    margin-top: 50px;
}
ul>li{
    list-style: none;
    width: 100%;
}
li>img{
    width: 100%;
}
.title{
    overflow: hidden; 
  text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; 
}
.info{
    display: flex;
    justify-content: space-between;
}
.info span{
flex: 1;
text-align: center;
}
</style>