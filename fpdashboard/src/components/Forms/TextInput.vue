<template>
    <div class="mb-3">
        <div v-if="floating" class="form-floating ">
            <input :type="type" :name="name" class="form-control" id="floatingInput" :placeholder="name" required>
            <label for="floatingInput">{{ name }}</label>
        </div>
        <div v-else-if="textareafloat" class="form-floating">
            <textarea :type="type" :name="name" class="form-control" :placeholder="name" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">{{ name }}</label>
        </div>
        <div v-else>
            <label for="exampleFormControlInput1" class="form-label">{{ name }}</label>
            <input :type="type" :name="name" class="form-control" id="exampleFormControlInput1" :placeholder="name"
                required>
        </div>
       



    </div>
</template>
<script>
export default {
    name: 'TextInput',
    props: ['name', 'type', 'floating', 'textareafloat'],
    // mounted(){
    //     console.log(this.floating)
    // }
}
</script>