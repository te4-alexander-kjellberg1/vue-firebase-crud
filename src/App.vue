<template>
  <div id="app" v-if="this.people">
    <h1>CRUD med Firebase</h1>

    <form>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Edit tools</th>
        </tr>
        <tbody>
          <Person v-for="(person, idx) in peopleAsArray" :key="idx" :person="person" />
            <td><input type="text" v-model="newPerson.firstname" placeholder="Firstname"></td>
            <td><input type="text" v-model="newPerson.lastname" placeholder="Lastname"></td>
            <td><input type="number" v-model="newPerson.age" placeholder="Age"></td>
            <td><button @click.prevent="addNewPerson">Create</button></td>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import Person from './components/Person'
import db from '@/db'

export default {
  name: 'App',
  components: { 
    Person 
  },
  data() {
   return {
      people: null,
      newPerson: {
        firstname: "",
        lastname: "",
        age: 0
      }
    }
  },
  methods: {
    addNewPerson() {
      db.ref('people').push(this.newPerson)
    }
  },
  computed: {
    peopleAsArray() {
      return Object.keys(this.people).map((k) => Object.assign({id: k}, this.people[k]));
    }
  },
  firebase: {
    people: db.ref('people')
  }
}
</script>

<style>
body {
  background-color: rgb(242, 242, 242);
}
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
