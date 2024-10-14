import React, { Component } from 'react';
import Inscript from './composants/inscript2';
import Gauch from './composants/inscript1';
class Inscription extends Component{
render(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col col-sm-12 col-md-5'>
                    <Gauch/>
                </div>
                <div className='col col-sm-12 col-md-7'>
                <Inscript/>
                </div>
            </div>
        </div>
    )
}
}
export default Inscription