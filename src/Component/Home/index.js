import React, { Component } from 'react';
import './Style.scss';
class Home extends Component {
  render() {
    return (
      <div clasName="container"> 
        <div className="row border ">
          <div className="col-md-6 py-4 tes">Hello this is hom pag</div>
         
          <img
            src="https://i.postimg.cc/xTh3bRcp/mike-petrucci-c9-FQyq-IECds-unsplash.jpg"
            className="img"
          />
        </div>
      </div>
    );
  }
}
export default Home;
