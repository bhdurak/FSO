import React, { useState } from 'react'
import InputForm from './components/inputform'
import Persons from './components/persons'
import Title from './components/title'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }
  return (
    <div>
      <Title text="Phonebook"></Title>
      <InputForm name="name" value={newName} onSubmit={addNewName} onChange={(event) => setNewName(event.target.value)}/>
      <Title text="Numbers"></Title>
      <Persons persons={persons}/>
    </div>
  )
}

export default App