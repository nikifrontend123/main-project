<template>
    <div class="cont">
        <p>{{ data.name }}</p>
        <p>{{ data.email }}</p>
        <button v-on:click="getData(data.name)">User Name</button>
    </div>
</template>

<script>
export default {
    name: 'user',
    props: {
        data: Object,
        getData: Function
    },

}
</script>
<style>
*{
    color: #fff;
}
.cont{
    display: flex;
    justify-content: center;
    align-items: center;
}
p {
    margin: 10px;
    border: 1px solid black;
    padding: 10px;
}

button {
    margin: 10px;
    border: none;
    padding: 10px 20px;
    background-color: aqua;
    border-radius: 10px;

}
</style>