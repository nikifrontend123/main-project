<template>
  <ul>
    <li style="color: red;" v-for="item in error" v-bind:key="item">
      {{ item }} is invalid
    </li>
  </ul>
  <div class="main">
    <!-- <p>{{ form }}</p> -->



    <form @submit="checkForm" method="post">

      <div class="form-floating mb-3">
        <!-- <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="form.Name"
          required>
        <label for="floatingInput">Name</label> -->
        <!-- <span style="color: red;" v-for="item in error" v-bind:key="item"> {{ item }} is invalid</span> -->
      </div>
      <TextInput name="name" type="text" :floating="true" />
      <TextInput name="email" type="email" :floating="true" />
      <TextInput name="password" type="password" :floating="true" />
      <br>
      <div class="radio">
        <label style="margin-right: 10px;">Gender</label>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"
            v-model="form.Gender">
          <label class="form-check-label" for="inlineRadio1">Male</label>

        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"
            v-model="form.Gender">
          <label class="form-check-label" for="inlineRadio2">Female</label>
        </div>

      </div>
      <br>
      <TextInput name="phoneNo" type="number" :floating="true" />
      <TextInput name="Message" type="text" :textareafloat="true" />
      <!-- <TextInput name="Message" type="text"  :textarea="true" :floating="false" /> -->
      
      <!-- 
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="form.Email">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="form.Password">
        <label for="floatingPassword">Password</label>
      </div> -->
      <!-- <button v-on:click="login">Login</button> -->
      <br>
      <input class="btn btn-primary" type="submit" value="">

    </form>
  </div>
</template>
<script>
import TextInput from './Forms/TextInput.vue';
import User from './User.vue';

export default {
  name: 'dashboard',
  components: {
    User,
    TextInput
  },
  data() {
    return {
      form: {
        Name: '',
        Gender: '',
        Email: '',
        Password: '',
      },
      error: []
    }
  },
  methods: {
    checkForm() {
      this.error = []
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item)
        }

      }
      if (this.error.length === 0) {
        alert("Data has been submitted")
      }
      console.warn(this.error)
    }
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
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  border: 1px solid black;
}
</style>
 