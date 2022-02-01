import React, { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({name, value}) => {
  return(
  <tr>
    <td>{name}</td> 
    <td>{value}</td>
  </tr>
  )
}

const Statistics = ({feedbackGiven, good, neutral, bad}) => {
  if(!feedbackGiven){
    return <p>No feedback given</p>
  }
  return (
    <table><tbody>
      <StatisticLine name="good" value={good}/>
      <StatisticLine name="neutral" value={neutral}/>
      <StatisticLine name="bad" value={bad}/>
      <StatisticLine name="total" value={good + bad + neutral}/>
      <StatisticLine name="average" value={(good - bad)/(good + bad + neutral)}/>
      <StatisticLine name="positive" value={"%" + (good*100)/(good + bad + neutral)}/>
    </tbody></table>
  )
}
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
      <Statistics 
        feedbackGiven={good + neutral + bad > 0} 
        good = {good}
        neutral = {neutral}
        bad = {bad}
      />
    </div>
  )
}

export default App