import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "..";


export const validateFields = ({ username, password, err }) => {
    const errors = {};
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!username) {
        errors.username = "Mail requerido";
    } 
    else if (!emailRegex.test(username)) {
        errors.username = "Mail incorrecto, porfavor escribalo correctamente"
    } 
    else if (err === 'Firebase: Error (auth/email-already-in-use).') {
        console.log('MOSTRAME ALGOOOOOO')
    }
  
    if (!password) {
        errors.password = "Contraseña requerida";
    } else if (password.length < 6) {
        errors.password = "La contraseña debe ser mayor a 6 caracteres";
    }
    return errors;
}


export default function registerService ({ username, password }) {
    createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
        .catch((err) => {
            validateFields({ err: err.message })
        });
}