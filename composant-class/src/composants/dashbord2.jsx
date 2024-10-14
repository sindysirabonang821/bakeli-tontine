import React, { Component } from 'react';
import Linechart from './chart1';
import Donutchart from './chart2';
class Dasbord2 extends Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                <div className='col col-md-6'>
                    <Linechart/>
                </div>
                <div className='col col-md-6'>
                <Donutchart/>
                </div>
                </div>
            </div>
        )
    }
}
export default Dasbord2