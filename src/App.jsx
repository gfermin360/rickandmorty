import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hook/useFetch'
import Header from './components/header';
import SearchForm from './components/SearchForm';
import LocationCard from './components/LocationCard';
import ResidentCard from './components/ResidentCard';

function App() {


  const [locationIndex, setlocationIndex] = useState(0) //Math.floor(Math.random() * 20)
  const [actualPage, setActualPage] = useState(1)

  const url = `https://rickandmortyapi.com/api/location?page=${actualPage}`


  const [location, getLocation] = useFetch()

  useEffect(() => {
    getLocation(url)
  }, [actualPage])

  return (
    <div>
      <Header />
      <SearchForm />
      <LocationCard
        location={location?.results[locationIndex]}
        getLocation={getLocation}
        setlocationIndex={setlocationIndex}
        locationIndex={locationIndex}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
      <div className='cards_container'>
        {
          location?.results[locationIndex].residents.map(residentUrl => (
            <ResidentCard
              key={residentUrl}
              residentUrl={residentUrl}
            />
          ))
        }
      </div>
    </div>
  )

}

export default App
