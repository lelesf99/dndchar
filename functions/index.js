const functions = require("firebase-functions");
const admin = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyA4DrYIu5wkZ6Z24y2JFB-7PWPcjwuX6PU",
    authDomain: "dndchar-143e9.firebaseapp.com",
    projectId: "dndchar-143e9",
    storageBucket: "dndchar-143e9.appspot.com",
    messagingSenderId: "1077981407053",
    appId: "1:1077981407053:web:99afc6ea1df4005a90f904"
};

const app = admin.initializeApp(firebaseConfig);
const db = admin.firestore(app);

exports.newUser = functions.https.onRequest((req, res) => {
    let data = req.body;
    // Create a new client
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Max-Age", 86400);
    if (data.userName && data.email && data.password) {
        admin.auth().createUser({
            uid: data.userName,
            email: data.email,
            emailVerified: false,
            password: data.password,
            disabled: false,
        }).then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            res.json(userRecord);
        }).catch((err) => {
            res.json(err);
        });

    } else {
        res.json({ error: 'no-data' });
    }
})

exports.createProfile = functions.auth.user().onCreate((user) => {
    var userObject = {
        nome: user.uid,
        chars: [],
    };
    return db.doc('users/' + user.uid).set(userObject);
});