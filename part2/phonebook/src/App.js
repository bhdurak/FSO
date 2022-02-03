import React, { useState } from 'react'
import InputField from './components/inputfield'
import InputForm from './components/inputform'
import Persons from './components/persons'
import Title from './components/title'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  var filteredPersons = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  const addNewName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(!persons.find(p => p.name === newName)){

      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
    else{
      alert(`${newName} is already added to phonebook`)
    }
  }

  const applyFilter = (event) => {
    setFilter(event.target.value)
    if(filter === ""){
      filteredPersons = persons
      return
    }
    console.log(filter.toLowerCase().trim(), event.target.value, filteredPersons);
  }

  return (
    <div>
      <Title text="Phonebook"></Title>
      filter shown with <InputField value={filter} onChange={applyFilter} />
      <Title text="add a new"></Title>
      <InputForm name="name" value={newName} numberValue={newNumber} onSubmit={addNewName} onChange={(event) => setNewName(event.target.value)} onNumberChange={(event) => setNewNumber(event.target.value)}/>
      <Title text="Numbers"></Title>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App