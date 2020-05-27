import React, { useContext} from 'react'
import NavbarSection from './NavbarSection'
import Loader from './Loader';
import {FlipkartProvider, FlipkartContext} from '../context/FlipkartContext'
import FlipkartMainuseAPI from '../Hooks/FlipkartMainuseAPI'
import FilterDropDown from './FilterDropDown';
import ProductsDisplay from './ProductsDisplay';


const FlipkartMain = () => {
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
                    <div className="card col">
                        <div className="" >
                            <h5 class="card-header">Filters</h5>
                            <div className="card-body">
                                <FilterDropDown></FilterDropDown>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9 col-xl-9 col-l-9 col-sm-9 ">
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
                            <ProductsDisplay></ProductsDisplay>
                        </div>
                    </div>

                </section>
            </div>
            )}
        </>
    )
}

export default FlipkartMain
