import React, { Component } from 'react';
import Sidbare from './composants/sidebare';
import Nav from './composants/nav';
import Dasbord from './composants/dashbord1';
import Dasbord2 from './composants/dashbord2';
import Dasbord3 from './composants/dashbord3';
class Acceuil extends Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-md-2'>
                        <Sidbare/>
                    </div>
                    <div className='col col-md-10'>
                    <Nav nom="Admin Dashboard"/>
                    <Dasbord/>
                    <Dasbord2/>
                    <Dasbord3/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Acceuil