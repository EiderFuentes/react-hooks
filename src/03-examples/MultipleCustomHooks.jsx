import React from 'react'

import { useFetch, useCounter } from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

    //Desestructuracion de el Hooks
    const { counter, decrement, increment } = useCounter(1);
    //const {data, hasError, isloading} = useFetch('https://pokeapi.co/api/v2/pokemon/3');
    const {data, hasError, isloading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);


  return (
    <>
        <h1> Informacion de pokémon</h1>
        <hr/>

        { 
          isloading 
          ? <LoadingMessage /> 
          : (
             <PokemonCard 
                id={ counter } 
                name={ data?.name } 
            />)
        }

        <button 
           className='btn btn-primary mt-2'
           onClick={ () => counter > 1 ? decrement() : null }
        >
            Anterior
        </button>
        <button 
          className='btn btn-primary mt-2'
          onClick={ () => increment() }
        >
            Siguiente
        </button>

    </>
  )
}
