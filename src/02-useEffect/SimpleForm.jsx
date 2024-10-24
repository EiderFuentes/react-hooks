import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'andres',
        email: 'eider@google.com'

    });

    //desestructuracion
    const {username, email } = formState;

    //funcion que me permite cambiar 
    // const ouInputChange = ( event) => {
           //console.log(event.target.value);
    //     console.log(event.target.name);
    // }

    const ouInputChange = ( { target }) => {

        const {name, value } = target;
        //console.log({name, value })

        //Cambia el state
        setFormState({
            //desestructurar el formState
            ...formState,
            //Propiedaes computadas de los objetos       
            [ name ]: value     
        });
    }


    useEffect( () =>{
      //console.log('useEffect called!')
    }, []);

    useEffect( () =>{
      //console.log('formState changed!')
    }, [formState]);

    //Se dispara cuando el email cambie
    useEffect( () =>{
      //console.log('email changed!')
    }, [email]);


  return (
    <>
        <h1>Formulario Simple</h1> 
        <hr/>

        <input 
          type="text" 
          className="form-control"
          placeholder="Username"
          name="username" 
          value={ username }
          onChange={ ouInputChange }
        />
        <input 
          type="email" 
          className="form-control mt-2"
          placeholder="eider@google.com"
          name="email" 
          value={ email }
          onChange={ ouInputChange }
        />

        {
          (username === 'andres2') && <Message/>
        }

    </>
  )
}
