import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import NavBar from './components/Navbar/NavBar';
import TicketsList from './components/Tickets/TicketsList';
import TicketForm from './components/Tickets/TicketForm';
import FilteredList from './components/Tickets/FilteredList';

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
        <Route path='/tickets-filtered' Component={FilteredList}/>
      </Routes>
    </div>
  </BrowserRouter>
);


reportWebVitals();
