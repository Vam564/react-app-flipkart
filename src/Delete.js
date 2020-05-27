import React, { Component } from 'react';
class Delete extends Component {
    deleteItem(index) {
        let { cartList } = this.state
        cartList.splice(index, 1)
        this.setState({ cartList: [...cartList] })
      }
}