import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, You are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const age = 4
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Burak" age={34}/>
      <Hello name="Hayrullah" age={age}/>
      <Hello name="Durak" age={age*10}/>
      <Hello name="Durak" age={age*10}/>
    </>
  )
}

export default App