<template>
    <div class="mb-3">
        <div v-if="textareafloat" class="form-floating ">
            <textarea :type="type" :name="name" class="form-control" :placeholder="name" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">{{ name }}</label>
        </div>
        <div v-else>
            <label :type="type" :name="name" for="exampleFormControlTextarea1" class="form-label">{{name}}</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

    </div>
</template>

<script>
export default {
    name: 'TextInput',
    props: ['name', 'type', 'textareafloat'],
}
</script>

<style lang="scss" scoped></style>