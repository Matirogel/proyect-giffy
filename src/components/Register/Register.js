import React, { useEffect } from "react";
import registerService, { validateFields } from "../../services/registerService";
import useLocation from "wouter/use-location";
import useUser from "../../hooks/useUser";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Register.css'

import { auth } from "../..";
import { fetchSignInMethodsForEmail } from "firebase/auth";



  
const initialValues = {
    username: "",
    password: "",
}

export default function Register () {
    const [, pushLocation] = useLocation()
    const { isLogged } = useUser()
    
    useEffect(() => {
        if (isLogged) pushLocation('/')
    }, [isLogged, pushLocation])


    const handleSubmit = (values) => {
        fetchSignInMethodsForEmail(auth, values.username)
            .then((res) => {
                console.log(res)
                if (res.length > 0) {
                    alert('El correo electrónico ya está en uso. Por favor, utilice otro.');
                } else {
                    registerService(values)
                }
            })
            .catch((error) => {
                console.log(error);
                alert('Ocurrió un error al verificar el correo electrónico. Por favor, intente de nuevo más tarde.');
            })
    } 


    return (
        <section className="formContainer">
            <Formik
                initialValues= {initialValues}
                validate= {validateFields}
                onSubmit= {handleSubmit}
            >
                {({ errors, isSubmitting }) => (
                    <Form className=''>
                        <Field
                            className={errors.username ? 'error' : ''}
                            name='username'
                            placeholder='Ingrese su mail'
                            type='email'
                        />
                        <ErrorMessage className="" name='username' component='small'/>

                        <Field
                            className={errors.password ? 'error' : ''}
                            name='password'
                            placeholder='Ingrese su contraseña'
                            type='password'
                        />
                        <ErrorMessage className="" name='password' component='small'/>

                        <button className="btn" type='submit' disabled={isSubmitting}>
                            Registrarse
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    )
}













// export default function Register () {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')   
//     const [, pushLocation] = useLocation() 
//     const { isLogged } = useUser()

//     useEffect(() => {
//         if (isLogged) pushLocation('/')
//     }, [isLogged, pushLocation])
    
//     const handleSubmit = evt => {
//         evt.preventDefault()
//         registerService({username, password})
//     }

//     const handleUsernameChange = evt => {
//         setUsername(evt.target.value)
//     }

//     const handlePasswordChange = evt => {
//         setPassword(evt.target.value)
//     }

//     return (
//         <>
//            <section className="formContainer">     
//                 <form onSubmit={handleSubmit}>
//                     <input 
//                         type="text" 
//                         placeholder="Email" 
//                         onChange={handleUsernameChange} 
//                         value={username} 
//                     />
//                     <input 
//                         type="password" 
//                         placeholder="Contraseña" 
//                         onChange={handlePasswordChange} 
//                         value={password} 
//                     />
//                     <button>Confirmar</button>
//                 </form>
//             </section> 
//         </>

//     )
// }


