import React, { useState } from 'react'
import { getTicket,sum } from './helper'

function Lottery() {
    let [ticket,setTicket]=useState(getTicket(3))
    let isWinner= sum(ticket)===15

    let buyTicket=()=>{
        setTicket(getTicket(3))
    }
 


  return (
    <div>
        <h1>Lottery</h1>
        <div className='ticket'>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        </div>
        <br></br>
        <button onClick={buyTicket}>Buy Ticket</button>
        <h2>{isWinner?"Congratulations You Won 🎉🎊":"Try Again!"}</h2>
    </div>
  )
}

export default Lottery