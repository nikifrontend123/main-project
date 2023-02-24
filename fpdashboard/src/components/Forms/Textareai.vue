<template>
    <div class="mb-3">
        <div v-if="design === 'float'" class="form-floating ">
            <textarea :type="type" :name="name" class="form-control" :placeholder="name" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">{{ name }}</label>
        </div>
        <div v-else-if="design === 'inline'" class="input-group">
            <span :type="type" :name="name" class="input-group-text">{{name}}</span>
  <textarea class="form-control" aria-label="With textarea" :placeholder="name" style="color: #0f0f00;"></textarea>

        </div>

        <!-- --------default------------- -->
        <div v-else>
            <label :type="type" :name="name" for="exampleFormControlTextarea1" class="form-label">{{ name }}</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

    </div>
</template>

<script>
export default {
    name: 'TextInput',
    props: ['name', 'type', 'design'],
}
</script>

<style lang="scss" scoped></style>