import React,{useContext} from 'react'
import { FlipkartContext} from '../context/FlipkartContext'
import './CSS/Flipkart.css'

const Product = ({ product: {
    productimg,
    quantity,
    productName,
    productPrice:{
        cutOffPrice,
        actualPrice
    },
    specifications,
    deliveryFee
   
},
    index
}) => {
    const {state:{cart},deleteItem,decrementCounter,incrementCounter}=useContext(FlipkartContext)
    return (
        <>
        
            <div>
           
                 <div class="row mt-3">
                    <div class="col-3 ">
                        <div>
                            <img class="m-4 translate" height="200" width="100" src={productimg} />
                        </div>
                        <div className="m-3">
                            {quantity>1 && (<button type="button" class="btn btn-light" onClick={() => decrementCounter(index)} ><i class="fa fa-minus" /></button>
                            )}
                            <div class="badge mx-3">
                                <span className="font-weight-bold">{quantity}</span>
                            </div>
                            <button type="button" class="btn btn-light" onClick={() => incrementCounter(index)}><i class="fa fa-plus" /></button>
                        </div>

                    </div>
                    <div class="col-6">

                        <b>{productName}</b>
                       
                        <p className="text-dark">Seller: SuperComNet  <span>
                            <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png " width="77px" height="21px" />
                        </span></p>
                        <p ><span className="font-weight-bold">₹{Number(cutOffPrice) * quantity}</span> <strike className="mx-2 text-dark">₹{actualPrice}</strike><span className="mx-3">offer available</span></p>
                        <div className="d-flex mt-5">
                            <h5 className="mr-5 btn-hover"><a>SAVE FROM LATER</a></h5>
                            <h5 className="btn-hover"><a onClick={() => deleteItem(index)}>REMOVE</a></h5>
                        </div>
                    </div>
                    <div class="col-3">
                        <p className="mt-3 text-dark">Delivery by Thu May 21 | ₹{(quantity * deliveryFee)}</p>
                    </div>
                </div>
                <hr></hr> 
            </div>
        </>
    )
}

export default Product
