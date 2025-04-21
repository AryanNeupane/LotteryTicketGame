import React, { useState } from 'react'
import { getTicket,sum } from './helper'
import Ticket from './Ticket'
// import "./Lottery.css"


function Lottery({n=3,winningSum=15}) {
    let [ticket,setTicket]=useState(getTicket(n))
    let isWinning= sum(ticket)===winningSum

    let buyTicket=()=>{
        setTicket(getTicket(n))
    }
 


  return (
    <div>
        <h1>Lottery</h1>
        <Ticket ticket={ticket} />
        <br></br>
        <button onClick={buyTicket}>Buy Ticket</button>
        <h2>{isWinning?"Congratulations You Won 🎉🎊":"Try Again!"}</h2>
    </div>
  )
}

export default Lottery