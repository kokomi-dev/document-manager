import firebase from "../../../api/Firebase/Firebase";
var provider = new firebase.auth.GoogleAuthProvider();
export const createAccountEmailPassword = async (email, password) => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Create succes");
      })
      .catch(() => {
        console.log("Create false");
      });
  } catch {
    console.log("error");
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Login with email and password success");
      })
      .catch((error) => {
        console.log("Login with email and password false");
      });
  } catch {
    console.log("Login with email and password false");
  }
};
export const signInWithGoogle = async () => {
  try {
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("login with google success");
      })
      .catch((error) => {
        console.log("login with google false");
      });
  } catch {
    console.log("Login with google false");
  }
};
