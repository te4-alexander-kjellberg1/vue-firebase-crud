<template>
  <nav class="flex flex-col">
    <button v-if="this.checkSignedIn" @click.prevent="signOutFunction" class="nav-font-size sign-out-btn">Sign out</button>
    <router-link v-else class="nav-font-size" to="/signinpage">Sign In</router-link>
    <br>
    <router-link class="nav-font-size" to="/">Home</router-link> 
    <br>
    <router-link class="nav-font-size" to="/crud">CRUD</router-link> 
    <br>
    <router-link class="nav-font-size" to="/clouddb">Cloud DB</router-link> 
    <br>
    <router-link v-if="this.checkSignedIn" class="nav-font-size" to="/adminpage">Admin Page</router-link> 
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      user: null,
    }
  },
  methods: {
    signOutFunction() {
      firebase
        .default.auth()
        .signOut()
        .then(() => {
          alert('Successfully logged out');
          this.$router.push('/');
        })
        .catch(error => {
          alert(error.message);
          this.$router.push('/');
        });
    },
  },
  computed: {
    checkSignedIn() {
      let user = firebase.default.auth().currentUser;
      // return firebase.default.auth().currentUser ? true : false;
      if (user) {
        return true
      } else {
        return false
      }
    },
  }
}
</script>

<style>
nav {
  background-color: #2c3e50;
  width: 180px;
  min-height: 100vh;
  text-align: center;
  color: white;
}
.sign-out-btn {
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
}
.nav-font-size {
  font-size: 1.2rem;
}
</style>