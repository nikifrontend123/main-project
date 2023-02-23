<template>
    <div class="mb-3">
        <div v-if="floating" class="form-floating ">
            <input :type="type" :name="name" class="form-control" id="floatingInput" :placeholder="name" required>
            <label for="floatingInput">{{ name }}</label>
        </div>
        <div v-else>
            <label for="exampleFormControlInput1" class="form-label">{{ name }}</label>
            <input :type="type" :name="name" class="form-control" id="exampleFormControlInput1" :placeholder="name"
                required>
        </div>
        <div v-else="textarea">
            <label for="exampleFormControlTextarea1" class="form-label">{{ name }}</label>
            <textarea :type="type" :name="name" class="form-control" id="exampleFormControlTextarea1" rows="3"
                :placeholder="name"></textarea>
        </div>
        <div v-else="textareafloat" class="form-floating">
            <textarea :type="type" :name="name" class="form-control" id="floatingTextarea2" style="height: 100px"
                :placeholder="name"></textarea>
            <label for="floatingTextarea2">{{ name }}</label>
        </div>

    </div>
</template>
<script>
export default {
    name: 'TextInput',
    props: ['name', 'type', 'floating', 'textarea', 'textareafloat'],
    // mounted(){
    //     console.log(this.floating)
    // }
}
</script>