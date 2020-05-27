import React,{useContext} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {MyShowContext} from '../context/MyShowContext'
const Navbar = () => {
    const {search,handleInput}=useContext(MyShowContext)
    return (
        <>
            <div className="header">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">
                        <span>My Show</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse text-light" id="navbarTogglerDemo02" >
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                              <Link to="/home"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>  
                            </li>
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link" href="#">TV Shows</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/myshow"><a class="nav-link " href="#">Movies</a></Link>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" placeholder="Type to search..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInput} />
                                <div class="input-group-append">
                                    <button class="btn btn-danger" type="button" onClick={search}>Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
