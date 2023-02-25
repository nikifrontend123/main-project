<template>
    <div class="mb-3">
        <button v-if="design === 'priamary'" type="button" class="btn btn-primary">
            {{ name }}
        </button>
        <button v-else-if="design === 'link'" :type="type" :name="name" class="btn btn-link">
            {{ name }}
        </button>
        <button v-else-if="design === 'dark'" :type="type" :name="name" class="btn btn-dark">
            {{ name }}
        </button>


        <button v-else type="button" class="btn btn-dark">{{ name }}</button>
    </div>
    
</template>

<script>
export default {
    name: "CustomBtn",
    props: ["name", "type", "design"],
};
</script>

<style lang="scss" scoped></style>
