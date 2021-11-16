import { fetchMessages } from '../api/fetchMessages';
import { useEffect, useState } from 'react';


export const useFetchMessages = () => {

    const [state, setState] = useState();

    useEffect(() => {
        fetchMessages()
            .then( info =>{
                console.log(info)
                setState(info)
            })
            .catch( err => {
              console.error(`Error presentado: ${err}`)
            })  
    }, [])

    return state;
};