<template>
    <div class="container">
    <div id="app">
        <div class="btn">
        <button class="btn btn-primary" @click="$store.dispatch('increment')">+</button>
        <button class="btn btn-primary" @click="$store.dispatch('decrement')">-</button>
    </div>
        <div class="num">
            {{ num }}
        </div>
        <div class="numSq">
            <span>{{ num }} <sup>2</sup> =</span>
            {{ $store.getters.getNumSq }}
        </div>
    </div>
</div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex';
export default {
    name: 'test',
    computed:{
        num(){
        return this.$store.getters.getNum
      }
    },
    watch: {
    num(val) {
        if(val>5)
        alert("value changed")
    
    }
  },
}
</script>


<style  scoped>
.container{
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
}
#app{
display: grid;
justify-content: center;
align-items: center;
place-content: center;
margin: 20px;
width: 400px;
border: 1px solid #fff;
border-radius: 10px;
padding: 20px;
}
.num , .numSq{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    margin: 10px;
    padding: 10px;
}
</style>