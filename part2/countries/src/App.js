import React, { useEffect, useState } from "react";
import axios from 'axios'

const SearchField = ({value, onChange}) => <input value={value} onChange={onChange}></input> 

const WeatherField = ({cityName}) => {
  const [weatherData,setWeatherData] = useState({})
  useEffect(() => 
  axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=913a933d1838e17e1e2c7636e6a47b7b`)
  .then(response => setWeatherData(response.data))
  
  ,[])
  return (
    <>
      <h2>Weather in {cityName}</h2>
      <p>Temperature: {Object.keys(weatherData).length > 0 ? Math.floor(weatherData.main.temp-273)+" Celcius" : "N/A"}</p>
      <p>Wind: {Object.keys(weatherData).length > 0 ? Math.floor(weatherData.wind.speed)+" m/s" : "N/A"}</p>
    </>
  )
}

const SingleCountryField = ({country}) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>{Object.values(country.languages).map(language => <li key={language}>{language}</li>)}</ul>
      <img src={Object.values(country.flags)[0]} alt="flag"/>
      <WeatherField cityName={country.capital} />
      <hr/>
    </>
  )
}

const CountryList = ({countries}) => {
  const [toShow, setToShow] = useState(Array(countries.length).fill(false))
  if(countries.length > 10){
    return (
      <p>Too many matches. Specify another filter.</p>
    )
  }
  if(countries.length > 1 ) {
    console.log(toShow);
    let tempShow = [...toShow]
    return(
      <>
        {countries.map((country,i) => 
          { return(
            <>
            <p key={country.flag}>{country.name.common}<button onClick={() => {tempShow[i] = !tempShow[i];setToShow(tempShow)}}>show</button></p>
            <div>{(tempShow[i]) ? <SingleCountryField key={country.flag} country={countries[i]}  />: ""}</div>
            </>
          )
          }
        )}
      </>
    )
  }
  if(countries.length === 0) {
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
