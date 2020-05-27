import React, { useContext } from 'react'
import './CSS/Flipkart.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { FlipkartProvider, FlipkartContext } from '../context/FlipkartContext'
const NavbarSection = () => {
    const {
        state: {
            cart,
            search,
            User
        },
        display,
        handleInput,
        handleInputReg,
        handleInputLog,
        handleLog,
        handleReg
        
    } = useContext(FlipkartContext)

    return (
        <>
            <div>
            <nav class="row navbar navbar-expand-lg navbar-dark header-section">
            <a class="navbar-brand col-4" href="#">
    <img src="https://static.couponspy.in/picture/shop/240.JPG" width="100" height="80" alt=""/>
  </a>
            <form class="form-inline my-2 my-lg-0 col">
            <div class="input-group ">
  <input type="text" class="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2" onChange={handleInput}/>
  <div class="input-group-append">
      <Link to="/filteritems">
      <button class="btn btn-light" type="button" onClick={display}><i class="fa fa-search"
                                aria-hidden="true"></i></button>
      </Link>
    
  </div>
</div>

    </form>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
    {User=="User" ?(
                                    <>
                                     <li class="nav-item">
                                     <a href="#" class="nav-link "><button className="btn-sm btn-light " data-toggle="modal" data-target="#login">Login</button></a>
                                 </li>
                                 <li class="nav-item">
                                     <a href="#" class="nav-link "><button className="btn-sm btn-light " data-toggle="modal" data-target="#register">Register</button></a>
                                 </li>
                                 </>
                                ):(
                                    <li class="nav-item ml-n2">
                                        <a href="#" class="nav-link text-light"><i class="fa fa-user-o"></i> {User} </a>
                                </li>
                                )}
      <li class="nav-item ">
      <Link to="/flipkartmain">
                                        <a href="#" class="nav-link text-light ">Home</a>
                                    </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#">More</a>
      </li>
      <li class="nav-item">
      <Link to="/flipkart">
                                        <a href="#" class="nav-link text-light"><i class="fa fa-shopping-cart"></i> Cart <span class="badge badge-light">{cart.length}</span></a>
                                    </Link>
      </li>
    </ul>
    
  </div>
</nav>
            </div>
            <div class="row header-section" >
                <div class="col ml-2">
                    <Link to="/"><img src="https://static.couponspy.in/picture/shop/240.JPG" height="80" width="100" /></Link>
                </div>
                <div class="col mt-4 "style={{marginLeft:"100px"}}>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <input type="search" class="form-control" placeholder="Search..." value={search} aria-label="Search"
                                id="search" onChange={handleInput} />
                        </div>
                        <Link to="/filteritems" className="input group-text">
                            <button class="btn" onClick={display}><i class="fa fa-search"
                                aria-hidden="true"></i></button>
                        </Link>
                    </div>
                </div>
                <div class="col " style={{marginLeft:"90px"}}>
                    <nav class="navbar-expand-sm navbar-light ">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#xx">
                            <span class="navbar-toggler-icon"> </span>
                        </button>
                        <div class="collapse navbar-collapse " id="xx">
                            <ul class="navbar-nav">
                                {User=="User" ?(
                                    <>
                                     <li class="nav-item">
                                     <a href="#" class="nav-link "><button className="btn-sm btn-light " data-toggle="modal" data-target="#login">Login</button></a>
                                 </li>
                                 <li class="nav-item">
                                     <a href="#" class="nav-link "><button className="btn-sm btn-light " data-toggle="modal" data-target="#register">Register</button></a>
                                 </li>
                                 </>
                                ):(
                                    <li class="nav-item ml-n2">
                                        <a href="#" class="nav-link text-light"><i class="fa fa-user-o"></i> {User} </a>
                                </li>
                                )}
                               
                                <li class="nav-item">
                                    <Link to="/flipkartmain">
                                        <a href="#" class="nav-link text-light ">Home</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-light">More</a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/flipkart">
                                        <a href="#" class="nav-link text-light"><i class="fa fa-shopping-cart"></i> Cart <span class="badge badge-light">{cart.length}</span></a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>

                        <div class="modal  fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class=" m modal-content">
                                    <div class="modal-header">
                                        <h3 className="modal-title">Login</h3>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="login">
                                            <div className=" login-right mx-auto">
                                                <div >
                                                    <form>
                                                    <div className="col">
                                                        <input className="user mb-2" type="text" name="email"id="user"  placeholder="Username"  title="Ex:vam123@mail.com" onChange={handleInputLog} required/>
                                                    </div>
                                                    <div className="col">
                                                        <input className="user mb-2" type="password" name="password" id="pwd" placeholder="Password" title="Ex:Example123" onChange={handleInputLog} required/>
                                                    </div>
                                                    <div className="col">
                                                        <input className="user-btn" type="button" name="login" value="Log In" onClick={handleLog}/>
                                                    </div>
                                                    <div className="col mt-2">
                                                        <p style={{marginLeft:"90px"}}>OR</p>
                                                    </div>
                                                    <div className="col">
                                                        <input className="user-request shadow" type="button" name="login" value="Request OTP" />
                                                    </div>
                                                    <div className="col mt-2">
                                                        <span className="last">New to Flipkart ? <a className="last" data-toggle="modal" data-target="#register" data-dismiss="modal"> Create an Account</a></span>
                                                    </div>
                                                    </form>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="modal  fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class=" m modal-content">
                                    <div class="modal-header">
                                        <h3 className="modal-title">Register</h3>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="login">
                                            <div className=" login-right mx-auto">
                                                <div >
                                                    
                                                    <div className="col">
                                                        <input className="user mb-2" type="text" name="email" id="userR"  placeholder="Username" onChange={handleInputReg} required/>
                                                    </div>
                                                    <div className="col">
                                                        <input className="user mb-2" type="email" name="email" id="email"  placeholder="Email Id" onChange={handleInputReg} required/>
                                                    </div>
                                                    <div className="col">
                                                        <input className="user mb-2" type="password" name="password" id="pwdR" placeholder="Password" onChange={handleInputReg} required/>
                                                    </div>
                                                    <div className="col">
                                                        <input className="user-btn" type="button" name="login" value="Register" onClick={handleReg} />
                                                    </div>
                                                    <div className="col mt-2">
                                                        <p style={{marginLeft:"90px"}}>OR</p>
                                                    </div>
                                                    <div className="col">
                                                        <input className="user-request shadow" type="button" name="login" value="Request OTP" />
                                                    </div>
                                                    <div className="col mt-2">
                                                        <span className="last">Already have an Account? <a className="last" data-toggle="modal" data-target="#login" data-dismiss="modal">Click here to Login</a></span>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                    </nav>
                </div>
                </div>
        </>
    )
}

export default NavbarSection
