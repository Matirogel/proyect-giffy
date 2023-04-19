import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "..";

export default function loginService ({ username, password }) {
  signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
          console.log(userCredential)
      })
      .catch((err) => {
          console.log(err.mesagge)
      });
}