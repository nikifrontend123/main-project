<template>
  <ul>
    <li style="color: red" v-for="item in error" v-bind:key="item">
      {{ item }} is invalid
    </li>
  </ul>
  <div class="main">
    <!-- <img src="./assets/ss.png" style="width: 200px; height: 200px;">
    <p>hello</p>
     -->

    <!-- <p>{{ form }}</p> -->

    <form @submit="checkForm" method="post">
      <h2>Form</h2>
      <TextInput name="name" type="text" />
      <TextInput name="email" type="email" design="inline" />
      <TextInput name="password" type="password" design="floating" />
      <br />
      <div class="radio">
        <label style="margin-right: 10px">Gender</label>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"
            v-model="form.Gender" />
          <label class="form-check-label" for="inlineRadio1">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"
            v-model="form.Gender" />
          <label class="form-check-label" for="inlineRadio2">Female</label>
        </div>
      </div>
      <br />
      <TextInput name="phoneNo" type="number" design="floating" />
      <Textareai name="Message" type="text" design="inline" />
      <br />
      <input class="btn btn-primary" type="submit" value="" />
      <CustomBtn name="click me" type="button" design="link" />
    </form>
    <SelectCard/>

    <img :src="Image" alt="" width="400px" height="400px">
  </div>
</template>
<script>
import TextInput from "./Forms/TextInput.vue";
import Textareai from "./Forms/Textareai.vue";
import User from "./User.vue";
import CustomBtn from "./buttons/CustomBtn.vue";
import SelectCard from "./selectTableCard/SelectCard.vue";
import Image from '../assets/tshirt.jpg';

export default {
  name: "dashboard",
  components: {
    Image,
    User,
    TextInput,
    Textareai,
    CustomBtn,
    SelectCard
  },
  data() {
    return {
      form: {
        Name: "",
        Gender: "",
        Email: "",
        Password: "",
      },
      error: [],
    };
  },
  methods: {
    checkForm() {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
      }
      if (this.error.length === 0) {
        alert("Data has been submitted");
      }
      console.warn(this.error);
    },
  },

  // computed: {
  //   form() {
  //     return this.$store.getters.getAlldata
  //   }
  // }
};
</script>

<style>
.main {
  margin: 20px;
  padding: 20px;
  /* width: 100%; */
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}

form {
  padding: 10px 60px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
