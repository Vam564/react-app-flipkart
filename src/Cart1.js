import React, { Component } from "react";

class Cart1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " Simple CRUD in React ",
      act: 0,
      index: "",
      items: [],
    };
  }
  componentDidMount() {
    //JSON Data Rendering From API
    this.refs.name.focus();
  }

  componentDidUpdate() {
    //Updating the state when deleting,adding and updating
  }

  addItem = (event) => {
    event.preventDefault();
    //Destructuring Items from State
    const { items } = this.state;
    //Assigning Items to new Variable
    let addItems = items;

    let Itemname = this.refs.name.value;
    let address = this.refs.address.value;
    console.log(Itemname);

    if (this.state.act === 0) {
      //Adding
      let addNewItem = {
        Itemname,
        address,
      };

      addItems.push(addNewItem);
    } else {
      //Update
      let index = this.state.index;
      items[index].Itemname = Itemname;
      items[index].address = address;
    }

    this.setState({
      items: addItems,
      act: 0,
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  deleteItem = (i) => {
    const { items } = this.state;
    let deleteItems = items;
    deleteItems.splice(i, 1);
    this.setState({ items: deleteItems });
  };

  updateItem = (i) => {
    let item = this.state.items[i];
    this.refs.name.value = item.Itemname;
    this.refs.address.value = item.address;

    this.setState({
      act: 1,
      index: i,
    });
    this.refs.name.focus();
  };

  render() {
    const { title } = this.state;
    let { items } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <form ref="myForm" className="myForm">
          <input
            type="text"
            placeholder="Your Name"
            className="FormField"
            ref="name"
          ></input>
          <input
            type="text"
            placeholder="Your Address"
            className="FormField"
            ref="address"
          ></input>
          <button onClick={(event) => this.addItem(event)} className="myButton">
            Submit
          </button>
        </form>
        <div>
          {items.map((item, i) => (
            <>
              <li key={i} className="myList">
                {i + 1}, {item.Itemname} , {item.address}
                <button onClick={() => this.deleteItem(i)} className="myButton">
                  Remove
                </button>
                <button onClick={() => this.updateItem(i)} className="myButton">
                  Update
                </button>
              </li>

              <div class="card w-50">
                <div class="card-body">
                  <h5 class="card-title">{item.Itemname}</h5>
                  <p class="card-text">{item.address}.</p>
                  <a href="#" class="btn btn-primary">Save</a>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart1;