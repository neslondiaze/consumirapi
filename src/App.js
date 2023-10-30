import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard 
            imagen="assets/img/nelsondiaz.jpeg"
            altImagen='Foto de Nelon Diaz'
            />} />
          <Route path='/nuevo' element={<Nuevo />} />
          <Route path='/editar' element={<Editar />} />

        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
