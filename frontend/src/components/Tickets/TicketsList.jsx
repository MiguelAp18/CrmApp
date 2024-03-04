import React, { useEffect, useState } from "react";

// Components
import TicketItem from "./TicketItem";

// Server
import * as TicketServer from "./TicketServer";

const TicketsList = () => {
    
    const [tickets, SetTickets] = useState([])

    const TicketsListed = async () => {
        try {
            const res = await TicketServer.ticketsListed()
            const data = await res.json()
            SetTickets(data.tickets)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        TicketsListed()
    }, [])

    return (
        <div className="row">
            {tickets.map((ticket) => (
                <TicketItem key={ticket.id} ticket={ticket} TicketsListed={TicketsListed} />
            ))}
        </div>
    )
}

export default TicketsList;