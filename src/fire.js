
import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBwmkD9U-X_rBHTgPDOJAr0IULXJOetMLg",
    authDomain: "reactfire-ac5a6.firebaseapp.com",
    projectId: "reactfire-ac5a6",
    storageBucket: "reactfire-ac5a6.appspot.com",
    messagingSenderId: "152042234778",
    appId: "1:152042234778:web:082adfb2457805ae635023",
    measurementId: "G-BBNBVRK0F4"
  };
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;