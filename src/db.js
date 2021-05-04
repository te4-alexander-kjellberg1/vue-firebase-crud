import firebase from 'firebase/app'
import config from './dbConfig'
import 'firebase/database'

// Get a RTDB instance
export default firebase
  .initializeApp(config)
  .database()
