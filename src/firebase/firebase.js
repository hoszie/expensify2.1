// import * as actionGenerators from '../action-generators/expenses'; 
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:453775131419:web:a42343775f9adc373749be",
  measurementId: "G-09EWFGJWKB"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };






















// const database = firebase.database();

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })  




// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 103400,
//   createdAt: 293847928374
// })



// database.ref('notes/-MfqkWiOhgeTgbUwMMa-').remove();


// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Angular'
// })


// database.ref().on('value', (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`)
// })















// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(4);
// }, 3500)

// setTimeout(() => {
//   database.ref('age').set(onValueChange);
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(440);
// }, 10500)








// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Nick Coleman',
//   age: 34,
//   stressLevel: 6,
//   isSingle: true,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Vancouver',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Data is saved!!!');
// }).catch((error) => {
//   console.log('Something went wrong', error)
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   'location/country': 'United States'
// })











// database.ref().update({ 
//   location: {
//     city: 'Portland',
//     country: 'United States'
//   },
//   isSingle: null
// })



// database.ref('isSingle').set(null);

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   }














// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAhqALO2hiavBjzOpM8GiOystF6oIYHMJI",
//     authDomain: "expensify-7f66d.firebaseapp.com",
//     databaseURL: "https://expensify-7f66d-default-rtdb.firebaseio.com",
//     projectId: "expensify-7f66d",
//     storageBucket: "expensify-7f66d.appspot.com",
//     messagingSenderId: "453775131419",
//     appId: "1:453775131419:web:a42343775f9adc373749be",
//     measurementId: "G-09EWFGJWKB"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>