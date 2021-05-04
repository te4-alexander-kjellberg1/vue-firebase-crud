<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Egna grejen</h1>
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th></th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td><div class="flex flex-col"><button>Update</button><button>Delete</button></div></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Firstname"></td>
        <td><input type="text" placeholder="Lastname"></td>
        <td><input type="text" placeholder="Age"></td>
        <td><button>Create</button></td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
table {
  margin: 0 auto;
  border-collapse: collapse;
}
th {
  background-color: gray;
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
