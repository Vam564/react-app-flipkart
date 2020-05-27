import React, { useState, useEffect,useReducer } from 'react'
import reducer from '../reducer/reducer'

const FlipkartuseAPI =() =>{
    const INITIAL_STATE = {
        shoppingCart:[],
        isAPILoaded:false,
        totalCost:0,
        totalPrice:0,
        deliveryFee:0
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const { shoppingCart,isAPILoaded,totalCost,totalPrice,deliveryFee } = state;
    useEffect(() => {
        fetch('https://jsonblob.com/api/fbb24144-94eb-11ea-9b86-8179a6e25e40').then(response => response.json()).then(json => {
            console.log("hi")
        setTimeout(() => {
                
                dispatch({type:'API_SUCCESS',context:{shoppingCart:[...json],isAPILoaded:true}})
            }, 2000)
        })
    }, []);

    useEffect((prevState) => {
        dispatch({type:'UPDATE_TOTALS'})
    }, [shoppingCart])

    const incrementCounter = (index) => {
        console.log("hello")
        dispatch({type:'INCREMENT_COUNTERS',context:{index}})
    }
    const decrementCounter = (index) => {
        dispatch({type:'DECREMENT_QUANTITY',context:{index}})

    }
    const deleteItem = (index) => {
       // console.log("hi");
        dispatch({type:'DELETE_ITEMS',context:{index}})
    }
    
    return {
       state,
       incrementCounter,
       decrementCounter,
       deleteItem
    }
}
export default FlipkartuseAPI