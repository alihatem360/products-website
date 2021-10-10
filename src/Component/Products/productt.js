import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class proddddducts extends Component {
  render() {
    const { items } = this.props; // Destructing
    return (
      <div className="container">
        <h2>All Products</h2>
        {items.map((item) => {
          return (
            <div className="d-flex justify-content-between align-items-center border">
              key={item.id}
              <NavLink to={'/product/' + item.id} className="p-2 my-2">
                <span> {item.name} </span>
                <span className="float-right"> {item.price} LEG</span>
              </NavLink>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.x(item.id)}
              >
                Delete
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default proddddducts;
