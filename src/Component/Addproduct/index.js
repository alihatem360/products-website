import React, { Component } from 'react';

class Addproduct extends Component {
  render() {
    return (
      <div clasName="container">
        <form className="container" onSubmit={this.props.submitdata}>
          <div className="form-group">
            <label>product Name </label>
            <input
              type="text"
              class="form-control"
              onChange={this.props.handelchange}
              id="name"
            />
          </div>
          <div className="form-group">
            <lable> product price </lable>
            <input
              type="number"
              className="form-control"
              onChange={this.props.handelchange}
              id="price"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              className="form-control mt-4 bg-primary text-warning"
              value="Add product"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Addproduct;
