<template>
    <div class="row1">
        <div class="txt">
            <span>{{ title }}</span>
        </div>
        <div class="l">
            <label>
                <input type="checkbox" v-model="absd">
                <span></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
name:'TextCheckBox',
props:['index','title', 'state'],
data () {
    return {
        absd: false
    }
},
mounted(){
this.absd = this.state 
},
watch: {
    // state(newState, oldState) {
    absd() {
    //    this.$store.dispatch.toggleCheckBox(this.index)
       this.$store.dispatch('toggleCheckBox', this.index)
    }
  },

}
</script>

<style scoped >
.hero {
    width: 100%;
    height: 100%;
    background: #04192d;
    color: #fff;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
}

.hero h1 {
    display: flex;
    justify-content: center;
    margin: 20px;
}

.container {
    /* display: grid;
    place-items: center; */
    width: 450px;
    /* padding: 25px 40px 25px 25px ; */
    padding: 25px;
    border: 2px solid #fff;
    border-radius: 15px;
    box-shadow: rgba(255, 254, 254, 0.35) 0px 5px 15px;
}

.container h4 {
    display: flex;
    font-size: calc(1.275rem + .3vw);
    justify-content: center;
}

.row1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
    font-size: 24px;
}

label {
    position: relative;
    width: 50px;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: .5s;
}

label:hover {
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

}

input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
}

label span {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 3px solid #fff;
    border-radius: 6px;
    cursor: pointer;
}

label span::after {
    content: '';
    position: absolute;
    left: 24px;
    bottom: 10px;
    width: 20px;
    height: 40px;
    border: solid #00ff0a;
    border-width: 0 6px 6px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: width 0.5s, height 0.5s, opacity 0.5s;
}

input:checked~span::after {
    width: 20px;
    height: 40px;
    opacity: 1;
}</style>