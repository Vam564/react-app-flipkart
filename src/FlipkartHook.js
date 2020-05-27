import React from 'react';
import './Flipkart.css';
class FlipkartHook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shoppingCart: [],// Default Employee Data.
            totalCost: 0,
            totalPrice: 0,
            deliveryFee: 0
        }

    }
    componentDidMount() {
        fetch('https://jsonblob.com/api/fbb24144-94eb-11ea-9b86-8179a6e25e40').then(response => response.json()).then(json => {
            this.setState({
                shoppingCart: [...json],

            })
        })


    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.shoppingCart != this.state.shoppingCart) {
            let { totalCost, shoppingCart } = this.state;
            this.setState({ totalPrice: shoppingCart.reduce((a, b) => a + Number(b.cutOffPrice) * b.quantity, 0) })
            this.setState({ totalCost: shoppingCart.reduce((a, b) => a + Number(b.cutOffPrice) * b.quantity + b.quantity * b.deliveryFee, 0) });
            this.setState({ deliveryFee: this.state.shoppingCart.reduce((a, x) => a + (x.quantity * x.deliveryFee), 0) })
        }
    }

    incrementCounter(index) {
        let { shoppingCart } = this.state
        shoppingCart[index].quantity++
        this.setState({ shoppingCart: [...shoppingCart] })
    }
    decrementCounter(index) {
        let { shoppingCart } = this.state
        shoppingCart[index].quantity--
        this.setState({ shoppingCart: [...shoppingCart] })
    }
    deleteItem(index) {
        let { shoppingCart } = this.state
        shoppingCart.splice(index, 1)
        this.setState({ shoppingCart: [...shoppingCart] })
    }
    render() {
        let { shoppingCart, totalCost, totalPrice, deliveryFee } = this.state
        return (
            <>
                <div class="header ">
                    <div class="row header-section" >
                        <div class="col ml-5">
                            <img src="https://static.couponspy.in/picture/shop/240.JPG" height="80" width="100" />
                        </div>
                        <div class="col mt-4">

                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"
                                        id="search" />
                                </div>
                                <button class="  input-group-text" onclick="MOBILES.display()"><i class="fa fa-search"
                                    aria-hidden="true"></i></button>
                            </div>

                        </div>
                        <div class="col mt-3">
                            <nav class="navbar-expand-sm navbar-light ">
                                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#xx">
                                    <span class="navbar-toggler-icon"> </span>
                                </button>
                                <div class="collapse navbar-collapse " id="xx">
                                    <ul class="navbar-nav">
                                        <li class="nav-item"><a href="#" class="nav-link text-light"><button
                                            class="btn-sm btn-light text-primary">Login</button></a></li>
                                        <li class="nav-item"><a href="#" class="nav-link text-light">More</a></li>
                                        <li class="nav-item"><a href="#" class="nav-link text-light"><i
                                            class="fa fa-shopping-cart"></i>Cart</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="section">

                    <div>
                        {!shoppingCart.length ? (
                            <div class="row d-flex justify-content-center">
                                <div class="card" style={{ width: '72rem' }}>
                                    <div class="card-header">
                                        <h4>My Cart</h4>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img width="18rem" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" height="300" width="300"
                                            class="" alt="..." />
                                    </div>
                                    <div class="card-body text-center">
                                        <b>Missing Cart Items!!!</b>
                                    </div>
                                </div>
                            </div>
                        ) : (

                                <div class="row m-2">
                                    <div class="col-8 card m-2">
                                        <div>

                                            <div>
                                                <div class="row card-header">

                                                    <div class="float-left">
                                                        <h4>My Cart({shoppingCart.length})</h4>
                                                    </div>





                                                </div>
                                                <div className="card-body">
                                                    {shoppingCart.map((x, index) =>
                                                        <div>
                                                            <div class="row mt-3">
                                                                <div class="col-3 ">
                                                                    <div>
                                                                        <img class="m-4" height="200" width="100" src={x.productimg} />
                                                                    </div>
                                                                    <div className="m-3">
                                                                        {!!x.quantity && (<button type="button" class="btn btn-light" onClick={() => this.decrementCounter(index)} ><i class="fa fa-minus" /></button>
                                                                        )}
                                                                        <div class="badge mx-3">
                                                                            <span className="font-weight-bold">{x.quantity}</span>
                                                                        </div>
                                                                        <button type="button" class="btn btn-light" onClick={() => this.incrementCounter(index)}><i class="fa fa-plus" /></button>
                                                                    </div>

                                                                </div>
                                                                <div class="col-6">

                                                                    <b>{x.productName}</b>
                                                                    <small>{x.specifications[0]}</small>
                                                                    <p className="text-dark">Seller: SuperComNet  <span>
                                                                        <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png " width="77px" height="21px" />
                                                                    </span></p>
                                                                    <p ><span className="font-weight-bold">₹{Number(x.cutOffPrice) * x.quantity}</span> <strike className="mx-2 text-dark">{x.actualPrice}</strike><span className="mx-3">offer available</span></p>
                                                                    <div className="d-flex mt-5">
                                                                        <h5 className="mr-5 btn-hover"><a>SAVE FROM LATER</a></h5>
                                                                        <h5 className="btn-hover"><a onClick={() => this.deleteItem(index)}>REMOVE</a></h5>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <p className="mt-4">Delivery by Thu May 21 | ₹{(x.quantity * x.deliveryFee)}</p>
                                                                </div>
                                                            </div>
                                                            <hr></hr>
                                                        </div>

                                                    )}
                                                </div>
                                                <div class="card-footer ">

                                                    <div className="col">
                                                        <a href="#" class="btn  float-right text-white" style={{ backgroundColor: 'Tomato' }}>PLACE ORDER</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3 card m-2" style={{ width: '20rem' }}>
                                        <div className="card-header">
                                            <h5 className="text-muted">PRICE DETAILS</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h5>Price</h5>
                                                </div>
                                                <div className="col">
                                                    <p>₹{totalPrice}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <h5>Delivery Fee</h5>
                                                </div>
                                                <div className="col">
                                                    <p>₹{deliveryFee}</p>
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

                                    </div>
                                </div>
                            )}
                    </div>
                </div>

            </>
        )
    }
}
export default FlipkartHook;