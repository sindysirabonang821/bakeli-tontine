import React, { Component } from 'react';
import Progress1 from './progress1';
import Progress2 from './progresse2';

class Utilisateur3 extends Component {
    render() {
        const membres = [
            { id: 1, membre: 'Selena Roy', date: '01/01/2022', montant: '300.000', progression: 'términé', statut: 'términé', action: 'términé' },
            { id: 2, membre: 'Emma Watson', date: '01/01/2022', montant: '300.000', progression: 'en cour', statut: 'en cour', action: 'términé' },
            { id: 3, membre: 'Jhon Rober', date: '01/01/2022', montant: '300.000', progression: 'términé', statut: 'términé', action: 'términé' },
            { id: 4, membre: 'Anne Hathaway', date: '01/01/2022', montant: '300.000', progression: 'en cour', statut: 'en cour', action: 'términé' }, // Correction ici
            { id: 5, membre: 'Ravi Shankar', date: '01/01/2022', montant: '300.000', progression: 'términé', statut: 'términé', action: 'términé' },
            { id: 6, membre: 'Emma Stone', date: '01/01/2022', montant: '300.000', progression: 'en cour', statut: 'en cour', action: 'términé' }
        ];

        return (
            <div className="container">
                <div className="row mx-5 mt-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row heade text-center">
                                <div className="col-2">Membre</div>
                                <div className="col-2">Date de début</div>
                                <div className="col-2">Seuil</div>
                                <div className="col-2">Progression</div>
                                <div className="col-2">Statut</div>
                                <div className="col-2">Action</div>
                            </div>
                            {membres.map((membre) => (
                                <div key={membre.id} className="row text-center">
                                    <div className="col-2 mt-3 text-nowrap">{membre.membre}</div>
                                    <div className="col-2 mt-3">{membre.date}</div>
                                    <div className="col-2 mt-3">{membre.montant}</div>
                                    <div className="col-2 mt-3 text-nowrap">
                                        {membre.progression === 'términé' ? <Progress1 /> : <Progress2 />}
                                        
                                    </div>
                                    <div className="col-2 mt-3">
                                        <span className={membre.statut === 'términé' ? 'status-validé' : 'en attente'}>
                                            {membre.statut}
                                        </span>
                                    </div>
                                    <div className="col-2 mt-3">{membre.action}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Utilisateur3