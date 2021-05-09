<template>
  <div class="flex">
    <Navbar/>
    <div class="content flex">
      <div class="flex-col center-me">
        <p>Upload an images</p>
        <input type="file" @change="previewImage" accept="image/*" style="margin-left: 74px;">
        <input type="text" placeholder="Filename" v-model="saveImageURLAndFilename.imageFilename">
      </div>
      <div>
        <p>Progress: {{uploadValue.toFixed()+"%"}}
          <progress id="progress" :value="uploadValue" max="100" ></progress>
        </p>
      </div>
      <div v-if="imageData!=null">
        <div v-if="uploadValue == 100" class="center-me flex-col shadow-screen">
          <div class="overlay">
            <div class="flex justify-space-between mb-50px">
              <h3>{{ saveImageURLAndFilename.imageFilename }} was uploaded</h3>
              <button @click="uploadValue = 0" class="basic-btn">CLOSE</button>
            </div>
            <div class="expand-full center-me">
              <img class="preview" :src="picture">
            </div>
          </div>
        </div>
        
        <button @click="onUpload">Upload</button>
      </div>
    </div>
    <div class="showAllImagesBTN">
      <button @click="toggleImageGallery()" class="basic-btn">Show uploaded images</button>
    </div>
    <div v-if="isActive" class="shadow-screen">
      <div class="flex justify-space-between mb-50px">
        <p style="visibility: hidden;"></p>
        <button @click="toggleImageGallery" class="basic-btn">CLOSE</button>
      </div>
      <div class="container-images" v-if="loading">
        <div class="imImage"></div>
        <div class="imImage"></div>
        <div class="imImage"></div>
        <div class="imImage"></div>
      </div>
      <div class="container-images" v-else>
        <DisplayImage v-for="(firebaseImage, idx) in imagesAsArray" :key="idx" :firebaseImage="firebaseImage" />
      </div>
    </div>
  </div>
</template>

<script>
import DisplayImage from '../components/DisplayImage'
import Navbar from '../components/Navbar'
import firebase from 'firebase'
import db from '@/db'

export default {
  components: {
    Navbar,
    DisplayImage
  },
  data() {
    return {
      saveImageURLAndFilename: {
        imageFilename: "",
        imageURL: ""
      },

      imageData: null,
      picture: null,
      images: null,

      uploadValue: 0,

      loading: false,
      isActive: false,
    }
  },
  methods: {
    toggleImageGallery() {
      this.isActive = !this.isActive;
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      // Reset picture
      this.picture = null;

      // Push Image to Firebase
      const storageRef = firebase.storage().ref(`images/${this.saveImageURLAndFilename.imageFilename}`).put(this.imageData);

      // Progress bar loading
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, 
      error => {
        console.log(error.message)
      },
      () => {
        // Progress bar full and preview of image gets sent to template
        this.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url;
          this.saveImageURLAndFilename.imageURL = url;
          db.ref('imageURL').push(this.saveImageURLAndFilename);
        });
      }
      );
    },
  },
  computed: {
    imagesAsArray() {
      return Object.keys(this.imageURL).map((k) => Object.assign({id: k}, this.imageURL[k]));
    },
  },
  firebase: {
    imageURL: db.ref('imageURL')
  }
}
</script>

<style>
.imImage {
  height: 200px;
  width: 200px;
  background: blue;
  margin: 0.5rem;
  position: relative;
}
.container-images {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  width: 70%;
  margin: 0 auto;
  overflow-y: scroll;
}
.showAllImagesBTN {
  position: fixed;
  top: 0;
  right: 0;
}
.mb-50px {
  margin-bottom: 50px;
}
.shadow-screen {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.55);
  top: 0;
  left: 0;
}
.overlay {
  position: fixed;
  top: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 20rem;
  max-width: 26rem;
}
.expand-full {
  width: 100%;
  height: 100%;
}
img.preview {
  width: 200px;
}
</style>