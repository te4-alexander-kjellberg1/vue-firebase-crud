<template>
  <div class="imImage">
    <h3 class="img-title">{{ firebaseImage.imageFilename }}</h3>
    <img :src="firebaseImage.imageURL" class="img-bg" alt="Image could not load">
    <button class="basic-btn deleteImage-btn" @click="deleteImage">Delete</button>
  </div>
</template>

<script>
import db from '@/db'

export default {
  props: ['firebaseImage'],

  methods: {
    deleteImage() {
      console.log(db.ref('imageURL').child(this.firebaseImage.id))
      db.ref('imageURL').child(this.firebaseImage.id).remove()
    }
  },

  computed: {

  }
}
</script>

<style>
.img-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.img-title {
  position: absolute;
  margin-left: 1rem;
  background: rgba(137, 43, 226, 0.6);
  padding: 5px 10px;
  border-radius: 25px;
  z-index: 2;
  color: whitesmoke;
}
.deleteImage-btn {
  position: absolute;
  bottom: 0;  
  left: 50%; 
  transform: translate(-50%, -50%);
}
</style>