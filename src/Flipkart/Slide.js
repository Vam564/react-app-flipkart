import React, { useEffect, useReducer, useContext } from 'react';
import { FlipkartContext } from '../context/FlipkartContext';
import './CSS/Slide.css'

const Slide = () => {
    const {
        state: {
            carousel
        }
    } = useContext(FlipkartContext)

    return (
        <div>
            <div className="img">

            </div>
            <div>
               
            </div>
            <div >
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        {carousel.map((item, index) => {
                            return (
                                <div class={`carousel-item ${index == 0 ? "active" : ""}`}>
                                    <img class="d-block w-100" src={item} alt="First slide" style={{ height: "400px" }} />
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Slide;
