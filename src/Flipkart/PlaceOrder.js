import React, { useContext } from 'react';
import { FlipkartContext } from '../context/FlipkartContext';
import './CSS/PlaceOrder.css';

const PlaceOrder = () => {
    const {
        state: {
            cart,
            totalCost,
            totalPrice
        },
        handleInputLog,
        handleLog,
        
    } = useContext(FlipkartContext)
    return (
        <div className="mb-3">
            <div className=" text-center p-2 text-success justify-content-center">
                <h3>Hurrah!! Your order is placed</h3>
                <h4>Thankyou for purchasing !!</h4>
            </div>
            <div className="row placeOrder">

                <div className="col">
                    <div className="gif">

                    </div>
                </div>
                {/* https://cdn.lowgif.com/small/ed14526ed002fc41-confetti-falling-png.gif */}
                <div className="col items border ml-5">
                    <div className="item-cart-ordered ">
                        <h5>Items you ordered :</h5>
                    </div>
                    <div className=" ">
                        {!cart.length ? (
                            <div>
                                <div className="d-flex justify-content-center">
                                    <img width="223px" height="160px" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" height="300" width="300"
                                        class="" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <b>Missing Cart Items!!!</b>
                                    <p>Login to see the items you added previously</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn button mt-n5 mb-3" style={{ backgroundColor: 'Tomato' }} data-toggle="modal" data-target="#login">Login</button>
                                </div>
                            </div>
                        ) : (
                                <div>
                                    {cart.map(item => {
                                        return (
                                            <div className="row px-4 py-2 m-2 shadow">
                                                <div className="col m-2">
                                                    <img className="translate" width="80px" height="100px" src={item.productimg}></img>

                                                </div>
                                                <div className="col mt-3">
                                                    <p><span className="text-primary">Qunatity :</span> {item.quantity} </p>
                                                    <p className="mt-n1"><span className="text-primary">Price :</span> ₹{totalPrice}</p>
                                                </div>
                                                <div className="row"><b>{item.productName}</b></div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}

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
                                                        <span className="last">New to Flipkart ? <a className="last"> Create an Account</a></span>
                                                    </div>
                                                    </form>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    <div className="bordered my-2">

                        {totalCost == 0 ? ("") : (<h5 className="text-center mt-3 text-success">Amount Paid: ₹{totalCost}</h5>)}
                    </div>
                
                </div>
                <div className="col item-ordered">


                </div>


            </div>
        </div>
    )
}

export default PlaceOrder
