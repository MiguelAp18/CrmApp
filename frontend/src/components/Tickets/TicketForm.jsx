import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// Server
import * as TicketServer from './TicketServer'

const TicketForm = () => {

    const navigate = useNavigate()
    const params = useParams()

    const initialState = {id: 0, title: '', description: '', priority: 0}
    const [ticket, setTicket] = useState(initialState)

    const handleInputChange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value })   
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            if(!params.id) {       
                const res = await TicketServer.registerTicket(ticket)
                const data = await res.json()
                if(data.message === 'Success') {
                    setTicket(initialState)
                }
            } else {
                await TicketServer.updateTicket(params.id, ticket)
            }
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const getTicket = async (ticketId) => {
        try {
            const res = await TicketServer.getTicket(ticketId)
            const data = await res.json()
            const { title, description, priority } = data.tickets
            setTicket({title, description, priority})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(params.id) {
            getTicket(params.id)
        }
        // eslint-disable-next-line
    }, [])

    return (
    <div className='col-md-3 mx-auto'>
        <h2 className='mb-3 text-center'>Ticket</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" name='title' value={ticket.title} onChange={handleInputChange} className="form-control" minLength={2} maxLength={50} autoFocus required/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" name='description' value={ticket.description} onChange={handleInputChange} className="form-control" minLength={2} maxLength={300} required/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Priority</label>
                <input type="number" name='priority' value={ticket.priority} onChange={handleInputChange} className="form-control" required/>
            </div>
            <div className='d-grid gap-2'>
                {
                    params.id ? (
                        <button type="submit" className="btn btn-primary">Update</button>
                    ): (
                        <button type="submit" className="btn btn-success">Submit</button>
                    )
                }
            </div>
        </form>
    </div>
    )
}

export default TicketForm