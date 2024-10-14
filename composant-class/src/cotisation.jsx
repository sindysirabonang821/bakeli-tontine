import React, { Component } from 'react';
import Sidbare from './composants/sidebare';
import Nav from './composants/nav';
import Cotisation1 from './composants/cotisation1';
import Cotisation2 from './composants/cotisation2';
class Cotisation extends Component{
    render(){
        return(
            <div className='container-fluid'>
            <div className='row'>
                <div className='col col-md-2'>
                    <Sidbare/>
                </div>
                <div className='col col-md-10'>
                <Nav nom="Cotisation"/>
                <Cotisation1/>
                <Cotisation2/>
                {/* <Dasbord3/> */}
                </div>
            </div>
        </div>
        )
    }
}
export default Cotisation