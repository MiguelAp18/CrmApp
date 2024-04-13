/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Components
import TicketItem from './TicketItem.jsx'
import Spinner from './Spinner.jsx';

// Server
import * as ItemsServer from './TicketServer.js'

// eslint-disable-next-line react/prop-types
const FilteredList = () => {
    
    const [title, setTitle] = useState("")
    const [tickets, setTickets] = useState([])
    const [searchParams, setSearchParams] =  useSearchParams()

    const [isLoading, setIsLoading] = useState(true);

    const param = searchParams.get("title")
    
    useEffect(() => {
        
        try {        
            setTitle(param)
            
            if(title) {
                getFilteredTickets(title)
                setIsLoading(false);
                console.log('Title: ', title)
            } else {
                console.log("Title not found")
            }
        } catch (error) {
            console.log("Server error: ", error)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param, title])

    const getFilteredTickets = async (title) => {
        const res = await ItemsServer.searchTicket(title);
        const data = await res.json();
        
        console.log('Data: ', data)
        setTickets(data.tickets)
    }
    

    return (
        <div>
            { isLoading ? (
                <Spinner />
            ) : (
                <div className="row">
                    {tickets.map((ticket) => (
                        <TicketItem key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilteredList;