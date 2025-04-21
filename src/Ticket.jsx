import React from 'react'
import TicketNum from './TicketNum'
import "./Ticket.css"

function Ticket({ ticket }) {
  return (
    <div className='Ticket'>
      {ticket.map((num, idx) => (
        <TicketNum key={idx} num={num} />
      ))}
    </div>
  )
}

export default Ticket
