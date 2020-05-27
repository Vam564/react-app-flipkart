import useAPI from '../Hooks/useAPI'
import React,{createContext} from 'react'

export const MyShowContext = createContext();
export const MyShowProvider = props => {

    return(
        <MyShowContext.Provider value={{...useAPI()}}>
            {props.children}
        </MyShowContext.Provider>
    )}
    