import React from 'react'
import "./Lottery.css"
import "./App.css"
import Lottery from './Lottery'


function App() {
  return (
    <>
      <Lottery n={4} winningSum={18} />
    </>
  )
}

export default App