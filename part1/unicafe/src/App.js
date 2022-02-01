import React, { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({name, value}) => <p>{name} {value}</p>
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text="give feedback"/> 
      <Button onClick={() => setGood(good + 1)} text="good"></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button onClick={() => setBad(bad + 1)} text="bad"></Button>
      <Heading text="statistics"/> 
      <Statistic name="good" value={good}/>
      <Statistic name="neutral" value={neutral}/>
      <Statistic name="bad" value={bad}/>
      <Statistic name="total" value={good + bad + neutral}/>
      <Statistic name="average" value={(good - bad)/(good + bad + neutral)}/>
      <Statistic name="positive" value={"%" + (good*100)/(good + bad + neutral)}/>
    </div>
  )
}

export default App