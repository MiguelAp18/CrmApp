import React from 'react'
import { useNavigate } from 'react-router-dom'
// Server
import * as TicketServer from './TicketServer'

const TicketItem = ({ ticket, TicketsListed }) => {

  const navigate = useNavigate()
  
  const handleDelete = async(ticketId) => {
    await TicketServer.deleteTicket(ticketId)
    TicketsListed()
  }

  return (
    <div className='col-md-4 mb-4'>
        <div className='card card-body'>
            <h3 className='card-title'>
              {ticket.title}
              <button onClick={() => ticket.id && handleDelete(ticket.id)} className="ms-3 btn btn-sm btn-danger">
                Delete
              </button>
            </h3>
            <p className='card-text mt-3'>
              <a href='/#' style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Description:</a>  {ticket.description}
            </p>
            <p className='card-text'>
              <a href='/#' style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Category:</a>  {ticket.category}
            </p>
            <p className='card-text'>
              <a href='/#' style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Priority:</a>  {ticket.priority}
            </p>
            <button onClick={() => navigate(`/update-ticket/${ticket.id}`)} className="btn btn-primary">
              Update
            </button>
        </div>
    </div>
  )
}

export default TicketItem;
