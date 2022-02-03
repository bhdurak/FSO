import React, { useEffect, useState } from "react";
import axios from 'axios'

const SearchField = ({value, onChange}) => <input value={value} onChange={onChange}></input> 

const SingleCountryField = ({country}) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>{Object.values(country.languages).map(language => <li key={language}>{language}</li>)}</ul>
      <img src={Object.values(country.flags)[0]} />
    </>
  )
}

const CountryList = ({countries}) => {
  if(countries.length > 10){
    return (
      <p>Too many matches. Specify another filter.</p>
    )
  }
  if(countries.length > 1 ) {
    return(
      <>
        {countries.map(country => <p key={country.flag}>{country.name.common}</p>)}
      </>
    )
  }
  if(countries.length == 0) {
    return <p>No countries found</p>
  }
  return (
    <>{<SingleCountryField country={countries[0]} />}</>
  )
}

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [countries,setCountries] = useState([])
  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  const foundCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <>
      find countries<SearchField value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
      <CountryList countries={foundCountries} />
    </>
  );
}

export default App;
