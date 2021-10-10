import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Home from './Component/Home';
import { products } from './data';
import Producct from './Component/Products/productt';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Addddproduct from './Component/Addproduct';

// let data = localStorage.getItem('allproducts')
//   ? JSON.parse(localStorage.getItem('allproducts'))
//   : products;
// localStorage.setItem('allproducts', JSON.stringify(data));

class App extends Component {
  state = {
    broducts: products,
    name: '',
    price: '',
  };

  handleDelete = (id) => {
    console.log(id);
    let allProducts = [...this.state.broducts];
    let item = allProducts.filter((pro) => pro.id != id);
    this.setState(
      {
        broducts: item,
      },
      () => {
        localStorage.setItem('allProducts', JSON.stringify(products));
      }
    );
  };

  componentDidMount() {
    axios.get('').then((respons) => {
      this.setState({});
    });
  }

  changeName = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  addproduct = (e) => {
    e.preventDefault();
    this.setState({
      broducts: [
        ...this.state.broducts,
        {
          id: 6,
          name: this.state.name,
          price: this.state.price,
        },
      ],
    });
  };

  render() {
    console.log(this.state.name);
    console.log(this.state.price);
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route
          path="/Producccttt"
          render={(props) => {
            return (
              <Producct items={this.state.broducts} x={this.handleDelete} />
            );
          }}
        />

        <Route
          path="/Producttt/add"
          render={(props) => {
            return (
              <Addddproduct
                handelchange={this.changeName}
                submitdata={this.addproduct}
              />
            );
          }}
        />

        <img scr="https://i.postimg.cc/3NKcX0zx/Shrek-on-Xbox-A-Twisted-Fairy-Tale-Indeed.jpg" />
      </BrowserRouter>
    );
  }
}
export default App;
