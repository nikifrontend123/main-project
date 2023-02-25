<template>
    <div class="mb-3">
        <div v-if="design === 'floating'" class="form-floating ">
            <input :type="type" :name="name" class="form-control" id="floatingInput" :placeholder="name" required>
            <label for="floatingInput">{{ name }}</label>
        </div>

        <div v-else-if="design === 'inline'" class="row">
            <div class="col-3">{{ name }}</div>
            <div class="col-6">
                <input :type="type" :name="name" class="col-6 form-control" style="width: fit-content;" id="floatingInput"
                    :placeholder="name" required>
            </div>
        </div>
        <div v-else-if="design === 'colour'" class="row" style="background-color: red;">
            <div class="col-3">{{ name }}</div>
            <div class="col-6">
                <input :type="type" :name="name" class="col-6 form-control" style="width: fit-content;" id="floatingInput"
                    :placeholder="name" required>
            </div>
        </div>

        <!-- this i s default -->
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
    props: ['name', 'type', 'design'],
    // mounted(){
    //     console.log(this.floating)
    // }
}
</script>
<style scoped>
*{
    color: #000;
}
</style>