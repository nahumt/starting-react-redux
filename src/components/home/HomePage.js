import React, { Component } from 'react';
import { Link } from 'react-router';


class HomePage extends Component {
  render(){
    return(
      <div className="jumbotron">
      <h1> Pluralsight Administration </h1>
      <p> Learn React readux in EcmaScript 2015 or ES6 </p>
      <Link to="about" className="btn btn-primary btn-lg"> Learn More </Link>
      </div>
    );
  }
}

export default HomePage;
