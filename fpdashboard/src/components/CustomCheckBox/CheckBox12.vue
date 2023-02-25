<template>
    <div class="hero">
        <h1>Iam Check Box</h1>
        <div class="container">
            <h4>Languages</h4>
            <TextCheckBox 
                v-for="(task, index) in myTasks"
                :key="index"
                :index="index"
                :title="task.title"
                :state="task.state" 
             />
        </div>
    </div>
</template>

<script>
import TextCheckBox from './TextCheckBox.vue';

export default {
    components: { TextCheckBox },
    computed: {
        myTasks(){
            return this.$store.getters.getAllTasks
        }
    }

}
</script>

