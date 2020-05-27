import React,{useContext} from 'react'
import { FlipkartContext} from '../context/FlipkartContext'

const PriceDetails = () => {
    const {state:{totalCost,totalPrice,deliveryFee}}=useContext(FlipkartContext)
    return (
        <>
            <div className="card-header">
                <h5 className="text-muted">PRICE DETAILS</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                       <p className="font-weight-bold text-primary">Price</p> 
                    </div>
                    <div className="col">
                        <p className="text-success">₹{totalPrice}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="font-weight-bold text-primary">Delivery Fee</p>
                    </div>
                    <div className="col">
                        <p className="text-success">₹{deliveryFee}</p>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col">
                        <h3>Total</h3>
                    </div>
                    <div className="col">
                        <h3>₹{totalCost}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceDetails
