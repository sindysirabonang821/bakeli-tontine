import React, { Component } from 'react';
import Gauche from './composants/connection1';
import Droit from './composants/connection2';
import './App.css';
class Connection extends Component {
    render() {
      return (
        <div className='container-fluid '>
          <div className='row'>
            <div className='col col-sm-12 col-md-5'>
              <Gauche/>
            </div>
            <div className='col col-sm-12 col-md-7'>
              <Droit/>
            </div>
          </div>
  
        </div>
      );
    }
  }
  
  export default Connection;