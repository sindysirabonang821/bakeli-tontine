import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Remplacer Switch par Routes
import './App.css';
import Inscription from './inscription';
import Connection from './connexion';
import Acceuil from './accueil';
import Utilisateur from './utilisateur'
import Cotisation from './cotisation'
import Parametre from './parametre'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} /> 
          <Route path="/acceuil" element={<Acceuil />} /> 
          <Route path="/utilisateur" element={<Utilisateur />} /> 
          <Route path="/cotisation" element={<Cotisation />} /> 
          <Route path="/parametre" element={< Parametre />} /> 



        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
