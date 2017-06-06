import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render(){
    return(
      <div className="container-fluid">
        <p> Header here ...</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
