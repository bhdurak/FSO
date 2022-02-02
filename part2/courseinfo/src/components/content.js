import React from "react"
import Part from "./part"

const Content = ({parts}) => {
  return (
    parts.map((prop) => {
      return (
        <Part key={prop.id} name={prop.name} count={prop.exercises} />
      )
    })
  )
}

export default Content