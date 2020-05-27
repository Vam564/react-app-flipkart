import React from 'react'
import './CSS/Flipkart.css';

const EmptyCart = () => {
    return (
        <>
            <div class="row d-flex justify-content-center m-3 shadow-lg">
                <div class="" style={{ width: '72rem' }}>
                    <div class="mt-2">
                        <h4>My Cart</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img width="223px" height="160px" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" height="300" width="300"
                            class="" alt="..." />
                    </div>
                    <div class="card-body text-center">
                        <b>Missing Cart Items!!!</b>
                        <p>Login to see the items you added previously</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn button mt-n5 mb-3" style={{ backgroundColor: 'Tomato' }}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmptyCart

