<template>
    <div style="width: 100%;">
        <h1 style="background-color: red;" >Iam selectcard</h1>
        <!-- <img src="../../assets/Ss.png" alt="img" width="500"> -->

        <button v-for="list in lists" :key="list" @click="datas(list)" type="button" class="btn btn-primary" data-bs-toggle="button">
            <img style="border-radius: 6px;" src="../../assets/Ss.png" alt="img" width="50">
        </button>

        

    </div>
</template>

<script>
    export default {
        name:"selectcard",
        data(){
            return{
                lists:[1,2,3,4,5,6,7,8],
                selected: []
            }
        },
        // mounted(){
        //     this.selected.push('12334')
        // },
        methods:{
            datas(listId){
                this.selected.push(listId);
                console.warn('hellooo');
            },
        }
        
     }
</script>

<style scoped>
*{
    margin: 10px;
}
button{
    margin: 10px;
    background: transparent;
    padding: 10px;
     border: none;
     transition: .3s;
}
button:hover{
    transform: scale(1.1);
}
</style>