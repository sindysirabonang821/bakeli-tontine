import React, { Component } from 'react';
import Sidbare from './composants/sidebare';
import Nav from './composants/nav';
import Utilisateur1 from './composants/utilisateur1';
import Utilisateur2 from './composants/utilisateur2';
import Utilisateur3 from './composants/utilisateur3';

class Utilisateur extends Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-md-2'>
                        <Sidbare/>
                    </div>
                    <div className='col col-md-10'>
                    <Nav nom="Utilisateur"/>
                    <Utilisateur1/>
                    <Utilisateur2/>
                    <Utilisateur3/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Utilisateur