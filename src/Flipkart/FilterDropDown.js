import React, { useContext } from 'react'
import { FlipkartContext } from '../context/FlipkartContext'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


const FilterDropDown = () => {
    const {
        state: {
            dropDown
        },
        dropDownFilter

    } = useContext(FlipkartContext)
    return (
        <div>
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
                                {item[1].map((x,index) => {
                                    return (
                                        <li className="list list-item">
                                          <Link to="/filteritems"><a href="#" className="text-dark" ><input type="checkbox" value={x} onChange={(e)=>dropDownFilter(index,e,item[0])}/> {x}</a></Link>  
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
    )
}

export default FilterDropDown
