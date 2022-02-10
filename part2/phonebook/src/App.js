import React, { useEffect, useState } from 'react'
import InputField from './components/inputfield'
import InputForm from './components/inputform'
import Persons from './components/persons'
import Title from './components/title'
import PersonService from './services/personservice'
import SuccessMessage from './components/successmessage'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  var filteredPersons = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    PersonService.getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addNewName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(!persons.find(p => p.name === newName)){

      PersonService.addNew(newPerson)
      .then(response => {

        setPersons(persons.concat(response));
        setMessage(`Added ${response.name}`);
        setIsSuccess(true);
        setNewName('');
        setNewNumber('');
      })
    }
    else{
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)){
        PersonService.update(persons.find(p => p.name === newName)["id"], newPerson)
        .then(response => {
            setPersons(persons.map(p => p.name !== newName ? p : response))
            setMessage(`Changed ${response.name}'s Phone Number to ${response.number}`);
            setIsSuccess(true);
            setNewName('')
            setNewNumber('')
          })
          .catch(response => {
            setMessage(`Information of ${newName} has already been removed from server`)
            setIsSuccess(false);
          })
        }
    }
  }

  const deletePerson = (id) => {
    if(window.confirm(`Delete ${persons.find(p => p.id === id)["name"]}?`)){
      PersonService.deleteOne(id)
      .then(setPersons(persons.filter(p => p.id !== id)))
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
      <SuccessMessage message={message} setMessage={setMessage} isSuccess={isSuccess}/>
      filter shown with <InputField value={filter} onChange={applyFilter} />
      <Title text="add a new"></Title>
      <InputForm name="name" value={newName} numberValue={newNumber} onSubmit={addNewName} onChange={(event) => setNewName(event.target.value)} onNumberChange={(event) => setNewNumber(event.target.value)}/>
      <Title text="Numbers"></Title>
      <Persons persons={filteredPersons} onDelete={deletePerson}/>
    </div>
  )
}

export default App