<template>
  <div class="flex">
    <Navbar/>

    <div class="flex content">
      <div class="form-card form-card-sign-in">
        <h1 class="mt-0">Sign in</h1>
        <form @submit.prevent="signInFunction" id="sign-form">
          <div>
            <input v-model="email" type="email" placeholder="Username" class="basic-input ml-0">
            <input v-model="password" type="password" placeholder="Password" class="basic-input ml-0">
          </div>
          <button type="submit" class="basic-btn">Submit</button>
        </form>
      </div>
      <div class="form-card form-card-register">
        <h1 class="mt-0">Register</h1>
        <form @submit.prevent="registerFunction" id="register-form">
          <div>
            <input v-model="registerEmail" type="email" placeholder="Username" class="basic-input ml-0">
            <input v-model="registerPassword" type="password" placeholder="Password" class="basic-input ml-0">
          </div>
          <button type="submit" class="basic-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import firebase from 'firebase'


export default {
  name: "SignInPage",
  components: {
    Navbar
  },
  data() {
    return {
      email: "",
      password: "",
      registerEmail: "",
      registerPassword: "",
    }
  },
  methods: {
    signInFunction() {
      firebase
        .default.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Successfully logged in');
          this.$router.push('/crud');
        })
        .catch(error => {
          alert(error.message);
      });
    },
    registerFunction() {
      firebase
        .default.auth()
        .createUserWithEmailAndPassword(this.registerEmail, this.registerPassword)
        .then(() => {
          alert('Successfully registered! Please login.');
        })
        .catch(error => {
          alert(error.message);
      });
    },
  }
}
</script>

<style>
.form-card-sign-in {
  margin-bottom: 1rem;
}
.form-card-register {
  margin-top: 1rem;
}
</style>