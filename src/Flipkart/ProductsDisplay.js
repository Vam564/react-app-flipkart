import React, { useContext } from 'react'
import { FlipkartContext } from '../context/FlipkartContext'
import './CSS/Flipkart.css'

const ProductsDisplay = () => {
    const {
        state: {
            shoppingCart, cart, index, count
        },
        AddToCart,

    } = useContext(FlipkartContext)
    return (
        <>

            {!cart.length ? ("") : (
                <div>
                    {(cart.filter((a, i) => shoppingCart[index].productName == a.productName).length > 0) ? (
                        <div class="alert alert-primary" role="alert">
                            {cart.length > 1 ? (`${cart.length} Items added to Cart`) : (`${cart.length} Item added to Cart`)}
                        </div>

                    ) : (
                            <div class="alert alert-primary" role="alert">
                                Item already Added
                            </div>
                        )}
                    {/* {(cart.filter((a,i)=>shoppingCart[index].productName==a.productName).length==0) ?(
                        <div>
                             
                        </div>
                    ):(<div><div class="alert alert-danger" role="alert">
                    Item already Added
                  </div></div>)} */}

                </div>
            )}

            {shoppingCart.map((x, index) => {

                return (<div class="row">
                    <div class="col">
                        <img class="m-5 translate" width="100px" height="200px" src={x.productimg} />
                        <div class="ml-5"><input type="checkbox" /> Add to Compare</div>
                    </div>
                    <div class="col mt-4">
                        <strong class="ml-4">{x.productName}</strong>
                        <p class="ml-4"><span class="badge badge-success mr-1">{x.productRatings.starRating} <i
                            class="fa fa-star-o"></i></span><span class="text-muted"> {x.productRatings.totalRating}
                Ratings & {x.productRatings.totalReviews} </span></p>
                        <ul>
                            {x.specifications.map(y => { return (<li>{y}</li>) })}
                        </ul>
                    </div>
                    <div class="col mt-5">
                        <div><strong class="mt-2" style={{ fontSize: "larger" }}>₹{x.productPrice.cutOffPrice} </strong><span><img
                            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png " width="77px"
                            height="20px" /></span></div>
                        <p> <strike>₹{x.productPrice.actualPrice}</strike></p>
                        <p>Upto ₹ {x.productPrice.offer}Off on Exchange</p>
                        <div class="">
                            {/* {
                                !cart.length ? (<div>
                                    <button className="card-link btn btn-warning text-white mb-2" onClick={() => AddToCart(index)}><i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button>
                                </div>) : (
                                        <div >
                                            
                                        <button className="card-link btn btn-warning text-white mb-2" onClick={() => AddToCart(index)} disabled><i class="fa fa-shopping-cart"></i>&nbsp;ITEM ADDED</button>
                                        </div>
                                        
                                    )
                                } */}
                            <button className="card-link btn btn-warning text-white mb-2" data-toggle="popover" data-trigger="focus" data-content="Item Added" onClick={() => AddToCart(index)}><i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button>
                            <button className="card-link btn text-white" style={{ backgroundColor: 'Tomato' }}>BUY NOW</button>
                        </div>
                    </div>
                </div>


                )
            })
            }
        </>
    )
}

export default ProductsDisplay
