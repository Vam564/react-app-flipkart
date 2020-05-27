import React, { useContext } from 'react'
import NavbarSection from './NavbarSection'
import Loader from './Loader'
import EmptyCart from './EmptyCart'
import MyCart from './MyCart'
import PriceDetails from './PriceDetails'
import FlipkartMainuseAPI from '../Hooks/FlipkartMainuseAPI'
import {FlipkartProvider, FlipkartContext} from '../context/FlipkartContext'
import './CSS/Flipkart.css';

const Flipkart = () => {
    const {
        state:{
            shoppingCart,
            isAPILoaded,
            cart
        },
        display,
        handleInput
    } = useContext(FlipkartContext)
   
    return (
        <>
                    <div>
                        
                        <div class="section">
                            <div>
                                {!cart.length ? (
                                    <EmptyCart></EmptyCart>
                                ) : (
                                        <div class="row m-2">
                                            <div class="col-8 card m-2">
                                                <div>
                                                    <MyCart ></MyCart>
                                                </div>
                                            </div>
                                            <div class="col-3 card m-2" style={{ width: '20rem' }}>
                                                <PriceDetails  ></PriceDetails>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                
        </>
    )
}
export default Flipkart;