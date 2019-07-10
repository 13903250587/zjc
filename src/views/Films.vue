<template>
    <div>
      
        
        <router-view/>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
.tabs{
    height: 0.98rem;
    line-height: 0.98rem;
    display: flex;
    position:relative;
}

.tabs a {
    flex: 1;
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  height: 100%;
  width: 100%;
  font-size: 0.28rem;
}

.tabs a.router-link-exact-active {
  color: #ff5f16;
  
}

.tab-ink-bar-wrapper{
    width: 50%;
    position: absolute;
    bottom: 0;
}

.tab-ink-bar{
        border-bottom: 3px solid #ff5f16;
    border-radius: 20px;
    display: block;
    margin: auto;
    width: 56px;
}

.v-enter{
    transform: translateX(100%);
}
.v-enter-active{
    transition: all 0.2s;
}
.v-enter-to{
    transform: translateX(0%);
}

.r-enter{
    transform: translateX(-100%);
}
.r-enter-active{
    transition: all 0.2s;
}
.r-enter-to{
    transform: translateX(0%);
}
</style>
