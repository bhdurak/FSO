import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.count}</p>
  )
}
const Content = (props) => {
  return (
    props.data.map((prop) => {
      return (
        <Part key={prop.name} name={prop.name} count={prop.exercises} />
      )
    })
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content data = {course.parts} />
      <Total total={course.parts.map(p => p.exercises).reduce((prev, next) => prev + next)}/>
    </div>
  )
}

export default App