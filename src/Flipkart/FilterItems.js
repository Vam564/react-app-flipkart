import React, { useContext} from 'react'
import NavbarSection from './NavbarSection'
import Loader from './Loader';
import {FlipkartProvider, FlipkartContext} from '../context/FlipkartContext'
import FlipkartMainuseAPI from '../Hooks/FlipkartMainuseAPI'


const FilterItems = () => {
    const {
        state:{
            shoppingCart,
            dropDown,
            cart,
            filter,
            isAPILoaded,

        },
        handleInput,
        display,
        AddToCart
    }=useContext(FlipkartContext)
   
   

    

    return (
        <>
          {!isAPILoaded ? (
                <Loader></Loader>
            ) : (
            <div className="">
                
                <section className="row">
                    <div className="col-3">
                        <div className="card" style={{ width: '300px' }}>
                            <h5 class="card-header">Filters</h5>
                            <div className="card-body">
                                <p className="" style={{ fontSize: '12px', fontWeight: '500' }}>CATEGORIES</p>
                                <p className="card-text " style={{ fontSize: '14px', color: '#878787' }}>
                                    <i className=' mr-1'>></i>Mobiles & Accessories</p>
                                <a href="#" class="text-black"
                                    style={{ fontSize: '14px', textDecoration: 'none', color: 'black' }}>Mobiles</a>
                                <br></br>
                                <hr></hr>
                                <p class="" style={{ fontSize: '13px', fontWeight: '500' }}>PRICE:</p>
                                <div class="chrome mb-2">
                                    <input id="myinput" type="range" value="50" />
                                </div>
                                <div class="row ml-5">
                                    <select id="price" class=" mr-2">
                                        <option>Min</option>
                                        <option value="2000">2000</option>
                                        <option value="4000">4000</option>
                                        <option value="7000">7000</option>
                                    </select>
                                    <p>To</p>
                                    <select id="price" class=" ml-2">
                                        <option value="50000">50000</option>
                                        <option value="40000">40000</option>
                                        <option value="30000">30000</option>
                                        <option value="20000">20000</option>
                                    </select>
                                </div>
                                <hr></hr>
                                <input type="checkbox" /><img class="ml-2"
                                    src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" width="77px"
                                    height="20px" />
                                <hr></hr>

                                <div id="dropdowns">

                                    {dropDown.map((item, index) => {
                                        return (
                                            <div>
                                                <a href={`#exampleModal${index}`} data-toggle="collapse" aria-expanded="false" class="">{item[0]}</a>
                                                <ul class="collapse list-unstyled" id={`exampleModal${index}`}>
                                                    {item[1].map(x => {
                                                        return (
                                                            <li>
                                                                <a href="#" className="text-dark"><input type="checkbox"></input> {x}</a>
                                                            </li>
                                                        )
                                                    })}

                                                </ul>
                                                <hr></hr>

                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <ul class="nav ">
                            <li class="nav-item ">
                                <a class="nav-link disabled list text" href="#" tabindex="-1" aria-disabled="true">Home</a>
                            </li>
                            <li class="nav-item  ml-n4">
                                <a class="nav-link  disabled list text" href="#" tabindex="-1" aria-disabled="true">Mobiles &
                            Acc...</a>
                            </li>
                            <li class="nav-item ml-n4">
                                <a class="nav-link  text" href="#" tabindex="-1" aria-disabled="true">Mobiles</a>
                            </li>
                        </ul>
                        <div id="mobile">

                            {filter.map((x, index) => {

                                return (<div class="row">
                                    <div class="col-3">
                                        <img class="m-5" width="100px" height="200px" src={x.productimg} />
                                        <div class="ml-5"><input type="checkbox" /> Add to Compare</div>
                                    </div>
                                    <div class="col-6 mt-4">
                                        <strong class="ml-4">{x.productName}</strong>
                                        <p class="ml-4"><span class="badge badge-success mr-1">{x.productRatings.starRating} <i
                                            class="fa fa-star-o"></i></span><span class="text-muted"> {x.productRatings.totalRating}
                                                Ratings & {x.productRatings.totalReviews} </span></p>
                                        <ul>
                                            {x.specifications.map(y => { return (<li>{y}</li>) })}
                                        </ul>
                                    </div>
                                    <div class="col-3 mt-5">
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
                                            <button className="card-link btn btn-warning text-white mb-2" onClick={() => AddToCart(index)}><i class="fa fa-shopping-cart"></i>&nbsp;ADD TO CART</button> 
                                            <button className="card-link btn text-white" style={{ backgroundColor: 'Tomato' }}>BUY NOW</button>
                                        </div>
                                    </div>
                                </div>


                                )
                            })
                            }

                            
                        </div>
                    </div>

                </section>
            </div>
            )}
        </>
    )
}

export default FilterItems
