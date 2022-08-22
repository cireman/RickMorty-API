import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'

function App() {
  
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
      let numberLocation
      if(searchInput === ''){
        numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
      } else {
        numberLocation = searchInput
      }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])
  
  const handleSubmit = e => {
    e.preventDefault()

    setSearchInput(e.target.search.value)

  }

  console.log(searchInput)

  return (
    <div className="App">
      <figure>
        <img className='banner' src="/Rick&Morty-img/banner.png" alt="" />
        <form className='search--container' onSubmit={handleSubmit}>
          <input className='search--bar' id='search' type="text" placeholder='Type a location ID'/>
          <button className='search-btn'>
            <box-icon name='search-alt-2'></box-icon>
          </button>
        </form>
      </figure>
      <main className='main--container'>
        <LocationInfo location = {location} />
        <div className='cards__containers'>
          {
            location?.residents.map(url => (
              <CardResident 
                key={url}
                url = {url}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default App
