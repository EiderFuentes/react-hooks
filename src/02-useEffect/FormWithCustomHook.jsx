import { useEffect } from 'react'
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

  const { formState, ouInputChange, onResetFrom, username, email, password } = useForm({
      username: '',
      email: '',
      password: ''
  });

  //const { username, email, password } = formState;


  return (
    <>
        <h1>Formulario con custom hook</h1> 
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
        <input 
          type="password" 
          className="form-control mt-2"
          placeholder="Contraseña"
          name="password" 
          value={ password }
          onChange={ ouInputChange }
        /> 

        <button onClick={ onResetFrom } className='btn btn-primary mt-2'>Borrar</button>

    </>
  )
}
