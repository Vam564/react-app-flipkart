import React, { useState, useEffect,useReducer } from 'react'
import reducerMyShow from '../reducer/reducerMyShow'

const useAPI =() =>{

    const INITIAL_STATE = {
        movieList:[],
        isAPILoaded:false,
        input:'',
        movieName:'Telugu'
    }
    const [state, dispatch] = useReducer(reducerMyShow, INITIAL_STATE)
    const { movieName,movieList } = state;

    //const [movieList, setMovieList] = useState([]);
    //const [isAPILoaded, setIsAPILoaded] = useState(false);
    //const [input, setInput] = useState("");

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=4a3b711b`).then(response => response.json()).then(json => {
            const { Search, totalResults, Response } = json
            setTimeout(() => {
                dispatch({type:'API_SUCCESS',context:{movieList:[...Search],isAPILoaded:true}})
            }, 2000)
        })
    }, [movieName]);

    const handleInput = ({target}) => {
        //const { value } = e.target

        dispatch({type:'HANDLE_INPUT',context:{target}})
    }

    const search = () => {
        // fetch(`https://www.omdbapi.com/?s=${input}&apikey=4a3b711b`).then(response => response.json()).then(json => {
        //     const { Search, totalResults, Response } = json
        //     setTimeout(() => {
        //         setMovieList([...Search])
        //         setIsAPILoaded(true)
        //     }, 2000)
        // })
        dispatch({type:'SEARCH'})
    }
    return {
       state,
       search,
       handleInput

    }
}
export default useAPI