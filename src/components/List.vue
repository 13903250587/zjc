<template>
    <div class="move" v-gd='vis' dis="210">
        <div class="myheader" v-show="vis.flag">
            <div class="left">
                <div class="city">
                    <span>北京</span>
                    <img src="../assets/bot.png">
                </div>
            </div>
            <div class="title">
                <span>电影</span>
            </div>
            <div class="right"></div>
        </div>
          <Banner/>
        <div class="tabs" >
            
            <router-link to="/films/nowPlaying" >正在热映<transition><div v-if="'/films/nowPlaying'===$route.path" class="tab-ink-bar-wrapper">
                <span class="tab-ink-bar"></span>
            </div></transition></router-link>
            <router-link to="/films/comingSoon" >即将上映<transition name="r"><div v-if="'/films/comingSoon'===$route.path" class="tab-ink-bar-wrapper">
                <span class="tab-ink-bar"></span>
            </div></transition></router-link>
    
        </div>
        <ul class="list" >
            <li class="nowPlayingFilms" v-for="item in list" :key="item.filmId">
                <img :src="item.poster">
                <div class="nowPlayingFilm-info">
                     <div class="nowPlayingFilm-name">
                         <span class="name">{{item.name}}</span>
                         <span class="item">{{item.item.name}}</span>
                     </div>
                     <div class="nowPlayingFilm-grade">
                         <span class="label" v-show="item.grade">观众评分</span>
                         <span class="grade">{{item.grade}}</span>
                         <span class="grade" v-show="type==='comingSoon'">                             &nbsp;</span>
                     </div>
                     <div class="nowPlayingFilm-actors info-col">
                         <span class="label">主演：{{item.actors[0].name}} {{item.actors[1].name}} </span>
                     </div>
                     <div class="nowPlayingFilm-detail">
                         <span class="label" v-show="type==='nowPlaying'">{{item.nation}} | {{item.runtime}}分钟</span>
                     </div>
                     <div class="comingSoonFilm-detail">
                         <span class="label" v-show="type==='comingSoon'">上映日期：{{item.premiereAt | formatDate}}</span>
                     </div>
                </div>
                <div class="nowPlayingFilm-buy" v-show="type==='nowPlaying'">购票</div>
                <div class="comingSoonFilm-buy" v-if='item.isPresale' v-show="type==='comingSoon'" >预购</div>
            </li>
        </ul>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
export default {
   components:{
       Banner
   },
    created() {
        this.$router.push("/films/nowPlaying")
    },
   data() {
       return {
           type:'',
           list:[], 
           vis:{
               flag:false
           }   
       }
   },
   methods: {
       getData(){
           var type = this.type==='nowPlaying'?1:2;
           this.$axios.get(`/mz/gateway?cityId=110100&pageNum=1&pageSize=10&type=${type}&k=5194789`,{
               headers:{
                   'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.0.4","e":"15624133371112396529930"}`,
                   'X-Host': `mall.film-ticket.film.list`
               }
           }).then((res)=>{
               this.list = res.data.data.films
               console.log(res)
           })
       },
   },
  filters: {
      formatDate: function (value) {
        let date = new Date(value*1000);
        let M = date.getMonth() + 1;
        let d = date.getDate();
        let w = date.getDay();
        let week=['','一','二','三','四','五','六','日'];
        return  '周'+week[w]+'\xa0'+M+'月'+d+'日';
      }
    },
   watch: {
       $route:{
           handler(newV){           
               if(newV.path==='/films'){
                   this.$router.push('/films/nowPlaying')
               }else{
                   this.type=newV.params.type;
               this.getData();
               }
           },
           deep:true,
           immediate:true
       }
   },
}
</script>
<style >
   .myheader{
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 0.88rem;
       line-height: 0.88rem;
       background: #ffffff;
       z-index: 1000;
       display: flex;
       overflow: hidden;
   }

   .left{
       min-width: 15%;
       margin-left:15px; 
   }

  .move{
    position: fixed;
    top: 0;
    bottom: 0.98rem;
    right: 0;
    left: 0;
    overflow: auto;
  }

    .move .list img{
         width: 1.32rem;
         float: left;
    }

    .list{
        text-align: left;
        margin-left:15px;
    }

    .tabs::after{content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;}

    .list li{
        height: 1.88rem;
        padding: 15px 15px 15px 0;
    }

    .nowPlayingFilms{
        display: flex;
        align-items: center;
        position: relative;
    }

    .nowPlayingFilm-info{
        flex: 1;
        padding:0 10px 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .info-col{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .nowPlayingFilm-buy,.comingSoonFilm-buy{
       
        height: 0.5rem;
        line-height: 0.5rem;
        width: 1rem;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
    }

    .comingSoonFilm-buy{
        color: #ffb232
    }

    .nowPlayingFilm-buy::after,.comingSoonFilm-buy::after{
        content: '';
            transform: scale(.5);
    position: absolute;
    border: 1px solid #ff5f16;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
    }

    .comingSoonFilm-buy::after{
        border: 1px solid #ffb232;
    }

    .nowPlayingFilm-name .name{
        font-size: 16px;
    }

    .nowPlayingFilm-name .item{
            font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    }

    .nowPlayingFilm-name span{
        display: inline-block;
        vertical-align: middle;
    }

    .nowPlayingFilm-info .label{
        font-size: 13px;
    margin-top: 4px;
    color: #797d82;
    }

    .nowPlayingFilm-info .grade{
            color: #ffb232;
    font-size: 14px;
    }

    .list li::after{
            content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    }
</style>