<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  background-color: rgb(242, 242, 242);
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.content {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: blueviolet;
}
.basic-input {
  padding: 0.25rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.basic-btn {
  cursor: pointer;
  border: none;
  font-size: 1.2rem;
  margin-top: 5px;
  min-width: 6rem;
  color: whitesmoke;
  padding: 6px;
  border-radius: 25px;
  background: #2c3e50;
  box-sizing: border-box;
  box-shadow: 0 5px 10px rgba(69, 69, 69, 0.6);
}
.form-card {
  padding: 10px;
  background: rgba(163, 110, 177, 0.666);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}
a {
  color: aliceblue;
}
.ml-0 {
  margin-left: 0;
}
.mt-0 {
  margin-top: 0;
}
table {
  margin: 0 auto;
  border-collapse: collapse;
}
th {
  background-color: gray;
  color: whitesmoke;
}

td, th {
  border: 1px solid #dddddd;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: rgb(228, 228, 228);
}
tr:nth-child(odd) {
  background-color: rgb(205, 205, 205);
}
</style>
