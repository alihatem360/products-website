import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <div className="header bg-warning text-center  py-3">
        <NavLink to="/" className="px-5"> Home </NavLink>
        <NavLink to="/Producccttt" > products </NavLink>
        <NavLink to="/Producttt/add" className="px-5"> ADDproducts </NavLink>
      </div>
    );
  }
}
export default navbar;
