const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.posts = functions.https.onRequest((request, response) => {
  let posts = [
    {
      caption: "Velden",
      location: "Koekelare"
    },
    {
      caption: "Het Center",
      location: "Kortrijk"
    }
  ];
  response.send(posts);
});
