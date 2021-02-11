import React from 'react'
import Buttons from './Buttons'
import Timer from './Timer'

export default function Board () {
  return (
    <div>
      <h1 className="title">COUNTDOWN SAYS</h1>
      <div><Timer /></div>
      <Buttons />
    </div>
  )
}
