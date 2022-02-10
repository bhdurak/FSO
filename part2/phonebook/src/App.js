import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InputField from './components/inputfield'
import InputForm from './components/inputform'
import Persons from './components/persons'
import Title from './components/title'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  var filteredPersons = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addNewName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(!persons.find(p => p.name === newName)){

      axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => {

        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
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