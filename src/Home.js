import React,{useContext} from 'react'
import {MyShowContext} from './context/MyShowContext'
import Slide from './Flipkart/Slide'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Home=() =>{
   
    return (
        <div>
            <Link to="/"><Slide></Slide> </Link>
            
        </div>
    )
}

export default Home
