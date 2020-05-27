import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartList: [],
      totalCost: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartList != this.state.cartList) {
      let { totalCost, cartList } = this.state;
      let totalCost1 = cartList.reduce(
        (a, b) => a + Number(b.cost) * b.quantity, 0
      );
      this.setState({ totalCost: totalCost1 });
    }
  }
  componentDidMount() {
    fetch('https://jsonblob.com/api/dc88c196-8610-11ea-b90c-9f0129df8859').then(response => response.json()).then(json => {
      this.setState({
        cartList: [...json]
      })
    })

  }
 
 
  render() {
    let { cartList, totalCost } = this.state
    return (

      <div class="container">
        {cartList.map((x, index) =>
          <div class="row border shadow mt-2 p-2">
            <div class="col-2">
              <div><img class="ml-4" src={x.src} width="51px" height="112px" /></div>
              <div class="d-flex">
                {!!x.quantity && (<button class="btn btn-light" onClick={() => this.decrementCounter(index)}><i class="fa fa-minus"></i> </button>)}
                <div>
                  <span class="badge" style={{ padding: '10px' }}>{x.quantity}</span></div>
                <button class="btn btn-light" onClick={() => this.incrementCounter(index)}><i class="fa fa-plus"></i></button></div>
            </div>
            <div class="col-3">
              <div class="mt-2">{x.name}</div>

            </div>
            <div class="col-2">
              <div class="mt-5">price:<b>₹{Number(x.cost) * x.quantity}/-</b></div>
            </div>
            <div class="col-5"><button class="btn btn-danger" onClick={() => this.deleteItem(index)} >Remove</button></div>
          </div>
        )}
        <div id="total" class="mt-5 text-primary font-weight-bold">Total Price: <span class="text-success">{totalCost}</span></div>
      </div>

    );
  }
}

export default Cart;