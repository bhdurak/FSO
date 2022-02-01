import React, { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increment = () => {setCounter(counter + 1)}
  const decrement = () => {setCounter(counter - 1)}
  const reset = () => {setCounter(0)}

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increment} text="Increment" />
      <Button onClick={decrement} text="Decrement" />
      <Button onClick={reset} text="Reset" />
    </div>
  )
}

export default App