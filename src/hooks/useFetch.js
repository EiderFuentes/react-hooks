import { useEffect, useState } from 'react'



export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isloading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
        getFetch();

    }, [url]);
    

    const setLoadingState = () => {
        setState({
            data: null,
            isloading: true,
            hasError: false,
            error: null,
        });
    }

    const getFetch = async() => {

       setLoadingState();

       const resp = await fetch( url );

       //sleep
       await new Promise( resolve => setTimeout(resolve, 1500) );

       if (!resp.ok ){
          setState({
            data: null,
            isloading: false,
            hasError: true,
            error: {
                code: resp.status,
                message: resp.statusText,
            }
          });
          return;
       }

       const data = await resp.json();
       setState({
        data: data,
        isloading: false,
        hasError: false,
        error: null,
       })

       //manejo del cache

       //console.log({data});
    }


  return {
    data: state.data,
    isloading: state.data,
    hasError: state.hasError,
  }
}
