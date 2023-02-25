<template lang="">
    <h1>Iam home1 page</h1>
    
        <ul>
            <li v-for="user in users" :key="user.name">
                <user :data="user" :getData="getData"  />
            </li>
        </ul>
        
    
</template>

<script>
import User from './User.vue';
export default {
    name: 'home1',
    components: {
        User
    },
    methods: {
        getData(name) {
            alert(name)
        }
    },
    computed:{
      users(){
        return this.$store.getters.getActiveUsers
      }
    }
}
</script>
<style ></style>