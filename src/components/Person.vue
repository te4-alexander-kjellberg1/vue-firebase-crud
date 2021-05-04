<template>
  <tr v-if="!editing">
    <td>{{person.firstname}}</td>
    <td>{{person.lastname}}</td>
    <td>{{person.age}}</td>
    <td>
      <div class="flex flex-col">
        <button @click.prevent="updatePerson">Update</button>
        <button @click.prevent="deletePerson">Delete</button>
      </div>
    </td>
  </tr>

  <tr v-else>
    <td>
      <input type="text" v-model="editedPerson.firstname">
    </td>
    <td>
      <input type="text" v-model="editedPerson.lastname">
    </td>
    <td>
      <input type="number" v-model="editedPerson.age">
    </td>
    <td>
      <div class="flex flex-col">
        <button @click.prevent="saveEditedPerson">Save</button>
        <button @click.prevent="deletePerson">Delete</button>
      </div>
    </td>

  </tr>
</template>

<script>
import db from '@/db'

export default {
  props: ['person'],
  data() {
    return {
      editing: false,
      editedPerson: {
        firstname: this.person.firstname,
        lastname: this.person.lastname,
        age: this.person.age
      }
    }
  },
  methods: {
    updatePerson() {
      this.editing = true
    },
    saveEditedPerson() {
      this.editing = false;
      db.ref('people').child(this.person.id).update(this.editedPerson)
    },
    deletePerson() {
      db.ref('people').child(this.person.id).remove()
    }
  }
}
</script>

<style>
.mv-label {
  position: relative;
  top: 0;
  left: 0;
}
.absolute {
  position: absolute;
}
</style>