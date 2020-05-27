import React, { useState, useEffect,useContext } from 'react'
import Loader from './Loader'
import './MyShow.css';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import {MyShowContext} from '../context/MyShowContext'
import useAPI from '../Hooks/useAPI' 
const MyShow = () => {
    
const {
   state:{input,movieList,isAPILoaded},
   handleInput,
   search
} = useContext(MyShowContext)

    return (
        <>
            {!isAPILoaded ? (
                <Loader></Loader>
            ) :
                (
                    <div className="bg">
                       
                        <div class=" row wrapper">
                            <div className="col-3 bg1">
                               <Sidebar></Sidebar>
                            </div>
                            <div className="col-8">
                                <h5 className="text-light mt-2"> You have searched for "{input}"</h5>
                                <div className="row ml-2  mt-4">
                                    <MainContent movieList={movieList}></MainContent>
                                </div>
                            </div>
                        </div>
                    </div>

                )}


        </>
    )
}

export default MyShow
