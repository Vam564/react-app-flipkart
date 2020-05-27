import React, { Component } from 'react';
class Update extends Component {
    incrementCounter(index) {
        let { cartList } = this.state
        cartList[index].quantity++
        this.setState({ cartList: [...cartList] })
      }
    
      decrementCounter(index) {
        let { cartList } = this.state
        cartList[index].quantity--
        this.setState({ cartList: [...cartList] })
      }
}