import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA-XD-P4VSgKlvUYvC28tVH_jdONNsbxp8",
  authDomain: "vue-app-c157b.firebaseapp.com",
  databaseURL: "https://vue-app-c157b.firebaseio.com",
  projectId: "vue-app-c157b",
  storageBucket: "",
  messagingSenderId: "616862028335"
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// const settings = {
//   timestampsInSnapshots: true
// };

// db.settings(settings);

const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
