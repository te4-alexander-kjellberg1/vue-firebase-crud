<template>
<div class="flex">
  <Navbar/>
  <form id="importantTable" class="content flex" v-if="people">
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Edit tools</th>
      </tr>
      <tbody>
        <Person v-for="(person, idx) in peopleAsArray" :key="idx" :person="person" />
          <tr>
            <td><input type="text" v-model="newPerson.firstname" placeholder="Firstname"></td>
            <td><input type="text" v-model="newPerson.lastname" placeholder="Lastname"></td>
            <td><input type="number" v-model="newPerson.age" placeholder="Age"></td>
            <td><button class="basic-btn" @click.prevent="addNewPerson">Create</button></td>
          </tr>
      </tbody>
    </table>
  </form>
</div>
</template>

<script>
import Person from '../components/Person'
import db from '@/db'
import Navbar from '../components/Navbar'

export default {
  components: { 
    Person,
    Navbar
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
      db.ref('people').push(this.newPerson);
    }
  },
  computed: {
    peopleAsArray() {
      return Object.keys(this.people).map((k) => Object.assign({id: k}, this.people[k]));
    },
  },
  firebase: {
    people: db.ref('people')
  }
}
</script>

<style>
#importantTable {
  color: #2c3e50 !important;
}
</style>