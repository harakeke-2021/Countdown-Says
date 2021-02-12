import React, { useState } from 'react'

export default function Buttons () {
  const winMessage = 'You Won!'
  const loseMessage = 'You Lose, Start again'

  const [userInput, setUserInput] = useState([])

  const sequence = [2, 1, 3, 1, 4]
  // const userInput = []

  function clickHandler (e) {
    const divNum = e.target.id
    userInput.push(Number(divNum))

    const allGood = userInput.every((num, i) => {
      return sequence[i] === num
    })

    if (allGood) {
      if (userInput.length !== 5) {
        // alert(carryOnMsg)
      } else {
        alert(winMessage)
        setUserInput([])
      }
    } else {
      alert(loseMessage)
      setUserInput([])
    }
    // if userInput index value !== sequence index value
    // display loseMessage, change userInput to empty
    // if userInput length and match == sequence, winMessage
  }

  return (
    <div className="container">
      <div id='1' className="red" onClick={clickHandler}>
      </div>

      <div id='2' className="blue" onClick={clickHandler}>
      </div>

      <div id='3' className="green" onClick={clickHandler}>
      </div>

      <div id='4' className="pink" onClick={clickHandler}>
      </div>

    </div>
  )
}
