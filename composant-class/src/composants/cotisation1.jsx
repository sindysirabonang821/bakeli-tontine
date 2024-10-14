import React, { Component } from 'react';

class Cotisation1 extends Component{
    render(){

        return(
            <div className='container'>
            {/* card */}
            <div className='row p-4'>
            <div className='col mt-5'>
            <div className="card shadow">
            <div className="card-body ">
                          <h5 className="card-title"></h5>
                          <h6 className="card-subtitle mb-2 text-body-secondary">Juin</h6>
                          <h3 className="card-text fw-bold">225.000</h3>
                          <h6 className="card-subtitle mb-2  mt-1 text-white">
                            Nombres de cotisation: <span>27</span>
                        </h6>
                        </div>
            </div>
            </div>
            <div className='col mt-5'>
            <div className="card shadow">
            <div className="card-body ">
                          <h5 className="card-title"></h5>
                          <h6 className="card-subtitle mb-2 text-body-secondary">Mai</h6>
                          <h3 className="card-text fw-bold">100.000</h3>
                          <h6 className="card-subtitle mb-2  mt-1 text-white">
                            Nombres de cotisation: <span>23</span>
                        </h6>
                        </div>
            </div>
            </div>
            <div className='col mt-5 d-flex justify-content-center'>
            <div className="card shadow">
            <div className="card-body d-flex justify-content-center ">
                <div>
                <h6 className="card-subtitle mb-2 text-body-secondary"> Total caisse</h6>
                <h3 className="card-text fw-bold">3.500.000</h3>
                          <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                          <div className='progress-bar' >
                </div>
                
                          </div>
                          <h6 className="card-subtitle mb-2 text-body-secondary float-end mt-1">
                            77% du seuil
                        </h6>
                          </div>
                        </div>
            </div>
            </div>
            </div>
        </div>
        )
    }
}
export default Cotisation1