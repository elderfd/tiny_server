import express from "express";
import firebase from "firebase";

const default_port = 3000;
let port = default_port;

if (process.argv.length < 3 ) {
    console.log(`WARN: Did not supply port to listen on as command-line arg, using ${default_port}.`)
} else {
    port = process.argv[2];
}

// TODO: Add correct data ere
const firebase_config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(firebase_config);

const firebase_token = process.env.GAME_FIREBASE_TOKEN;

firebase.auth().signInWithCustomToken(firebase_token).catch(function(error) {
    console.log(`Firebase login error ${error.code}: ${error.message}`);
});

const app = express();

app.use(express.json());

app.post("/add_score", (request, response) => {
    let score = request.body;
    let user = request.body.user;
    let level = request.body.level;
    
    // TODO: Add data to firebase

    response.status(200);
});

app.get("/scores", (request, response) => {
    let scores = [];

    // TODO: Get data from firebase
    
    response.json({
        scores: scores
    });
});

app.listen(port);
