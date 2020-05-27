import React,{useContext} from 'react'
import './CSS/Flipkart.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { FlipkartContext} from '../context/FlipkartContext'
import Product from './Product'

const MyCart = () => {
    const {state:{cart}}=useContext(FlipkartContext)
    console.log(cart)
    return (
        <>
        
           
          
            <div className="">
                <div class="row card-header">

                    <div class="float-left">
                        <h4>My Cart({cart.length})</h4>
                    </div>
                </div>
                <div className="card-body">
                {/* {cart.map(x=>x.map((item,index)=><Product item={item} index={index}></Product>))} */}
                     {cart.map((product, index) =>
                        <Product product={product} index={index}></Product>

                    )} 
                </div>
                <div class="card-footer pb-5">
                   <Link to="/placeorder"><button className="btn button float-right" style={{ backgroundColor: 'Tomato' }}>PLACE ORDER</button></Link> 
                </div>
            </div>  
        </>
    )
}

export default MyCart
