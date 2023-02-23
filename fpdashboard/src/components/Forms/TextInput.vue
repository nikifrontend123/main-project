<template>
    <div class="mb-3">
        <div v-if="floating" class="form-floating ">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="form.Name">
            <label for="floatingInput">Name</label>
        </div>
        <div class="">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
    </div>
</template>
<script>
export default{
    name:'TextInput',
    props:['floating']
}
</script>