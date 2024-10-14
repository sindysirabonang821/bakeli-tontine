import React, { Component } from "react";

class Utilisateur1 extends Component {
  render() {
    return (
      <div className="container">
        {/* card */}
        <div className="row p-4">
          <div className="col mt-5">
            <div className="card shadow cart1">
              <div className="card-body ">
                <h5 className="card-title"></h5>
                <h6 className="card-subtitle mb-2 text-body-secondary text-white">Membre actif</h6>
                <h3 className="card-text fw-bold text-white">94 Membre</h3>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="card shadow">
              <div className="card-body ">
                <h5 className="card-title"></h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Membre Bloqués</h6>
                <h3 className="card-text fw-bold">6 Membres</h3>
              </div>
            </div>
          </div>
          <div className="col mt-5 ">
            <div className="card shadow">
              <div className="card-body">
              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary">Total Effectif</h6>
                              <h3 className="card-text fw-bold">100 Menbres</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Utilisateur1;
