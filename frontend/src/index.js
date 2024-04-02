import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import TicketsList from './components/Tickets/TicketsList';
import TicketForm from './components/Tickets/TicketForm';
import NavBar from './components/Navbar/NavBar';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <div className='container my-4'>
      <Routes>
        <Route exact path='/' Component={TicketsList}/>
        <Route path='/ticket-form' Component={TicketForm}/>
        <Route path='/update-ticket/:id' Component={TicketForm}/>
      </Routes>
    </div>
  </BrowserRouter>
);

reportWebVitals();
