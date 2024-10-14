import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidbare extends Component{
    render(){
        return(
            <div className='container'>
                <div className='row photo text-white text-center ' style={{ width: '250px', position: 'fixed', height: '100vh' ,padding:'25px'}} id='side'>
                <div className='mt-5'> 
                <Link to="" className='link fw-bold '>
                    <h3>Bakéli tontine</h3>
                    </Link >
                    <Link to="/acceuil" className='link'>
                    <p className='mt-4 li'>Dasbord</p>
                    </Link>
                    <Link to="/utilisateur" className='link'>
                    <p className='mt-4 li'>Utilisateurs</p> 
                    </Link>
                    <Link to="/cotisation" className='link'> 
                    <p className='mt-4 li'>Cotisation</p>
                    </Link>
                    <Link to="/parametre" className='link'>
                    <div class="btn-group">
                                <button type="button" className="btn text-white  fs-6 fw-semibold border border-0 dropdown-toggle li" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="false" aria-expanded="false">
                                  Parametres
                                </button>
                                <ul className="dropdown-menu g-0 bg text-white dropdown-menu-end dropdown-menu-lg-start border border-0 blue mx-2">
                                  <li className='mt-1 li'><Link to='' className='link'><button  className="dropdown-item text-white m-0 p-0 li"  type="button">Parametre generaux</button></Link></li>
                                  <li className='mt-1 li'><Link to=''  className='link'><button  className="dropdown-item text-white m-0 p-0 li"  type="button">Utilisateurs</button></Link></li>
                                  <li className='mt-1 li'><Link to=''  className='link'><button  className="dropdown-item text-white m-0 p-0 li"  type="button">Archives</button></Link></li>
                                  <li className='mt-1 li'><Link to=''  className='link'><button  className="dropdown-item text-white m-0 p-0 li"  type="button">Membres Bloques</button></Link></li>
                                </ul>
                              </div>
                    </Link>
                </div>
                <div></div>
                </div>
            </div>
        )
    }
}
export default Sidbare