const api_url = 'http://127.0.0.1:8000/api/tickets/'

export const ticketsListed = async () => {
    return await fetch(api_url)
}

export const getTicket = async (ticketId) => {
    return await fetch(`${api_url}${ticketId}`)
}

export const registerTicket = async (newTicket) => {
    return await fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': String(newTicket.title).trim(),
            'description': String(newTicket.description).trim(),
            'priority': parseInt(newTicket.priority),
            'category': String(newTicket.category).trim()
        })
    })
}

export const updateTicket = async (ticketId, updatedTicket) => {
    return await fetch(`${api_url}${ticketId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': String(updatedTicket.title).trim(),
            'description': String(updatedTicket.description).trim(),
            'priority': parseInt(updatedTicket.priority),
            'category': String(updatedTicket.category).trim()
        })
    })
}

export const deleteTicket = async (ticketId) => {
    return await fetch(`${api_url}${ticketId}`, {
        method: 'DELETE'
    })
}

export const searchTicket = async (title) => {
    return await fetch(`http://127.0.0.1:8000/api/search/?title=${title}`)
}