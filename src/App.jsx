import React from 'react'
import "./Lottery.css"
import "./App.css"
import Lottery from './Lottery'


function App() {
  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  )
}

export default App