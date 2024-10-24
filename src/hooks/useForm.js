import { useState } from 'react';


export const useForm = ( inicialForm = {} ) => {

    const [formState, setFormState] = useState( inicialForm );

    //desestructuracion
    //const {username, email, password } = formState;

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

    const onResetFrom = () => {
        setFormState( inicialForm );
  
    }

    return {
        //Expone
        ...formState,
        formState,
        ouInputChange,
        onResetFrom,
    }
}
