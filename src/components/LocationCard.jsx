import './styles/LocationCard.css'

const LocationCard = ({ location, setlocationIndex, locationIndex, actualPage, setActualPage }) => {

  const handleNext = () => {
    const nexPage = locationIndex + 1
    setlocationIndex(nexPage)
  }

  const handlePrev = () => {
    const prePage = locationIndex - 1
    setlocationIndex(prePage)
  }


  const handleSuperPage = (numb) => {
    if (numb === 7) { setlocationIndex(0) }
    setActualPage(numb)
  }


  console.log

  return (
    <div className='location__super__container'>
      <div className='locationContainer'>
        <button className='location__btn prev' onClick={handlePrev} disabled={locationIndex < 1}>
          <i
            className={`bx bxs-skip-previous-circle ${locationIndex < 1 ? 'location__btn--disabled' : 'location__btn--icon'}`}
          >
          </i>
        </button>
        <section className="location">
          <div className='location__pages__container'>
            <span className={`${actualPage === 1 ? 'location__pages__numb--active' : 'location__pages__numb'}`} onClick={() => handleSuperPage(1)} >1</span>
            <span className={`${actualPage === 2 ? 'location__pages__numb--active' : 'location__pages__numb'}`} onClick={() => handleSuperPage(2)} >2</span>
            <span className={`${actualPage === 3 ? 'location__pages__numb--active' : 'location__pages__numb'}`} onClick={() => handleSuperPage(3)} >3</span>
            <span className={`${actualPage === 4 ? 'location__pages__numb--active' : 'location__pages__numb'}`} onClick={() => handleSuperPage(4)} >4</span>
            <span className={`${actualPage === 5 ? 'location__pages__numb--active' : 'location__pages__numb'}`} onClick={() => handleSuperPage(5)} >5</span>
            <span className={`${actualPage === 6 ? 'location__pages__numb--active' : 'location__pages__numb'}`} onClick={() => handleSuperPage(6)} >6</span>
            <span className={`${actualPage === 7 ? 'location__pages__numb--active' : 'location__pages__numb'}`} onClick={() => handleSuperPage(7)} >7</span>
          </div>
          .        <span className='location__id'>{location?.id}</span>
          <h1 className="location__tittle"> {location?.name} </h1>
          <div className='location__info__container'>
            <div className="location__info"><span className="location__info--tittle">Type:</span><span className="location__info--content">{location?.type}</span></div>
            <div className="location__info"><span className="location__info--tittle">Dimension:</span><span className="location__info--content">{location?.dimension}</span></div>
            <div className="location__info"><span className="location__info--tittle">Population:</span><span className="location__info--content">{location?.residents.length}</span></div>
          </div>
        </section>
        <button className='location__btn next' onClick={handleNext} disabled={locationIndex > 18 || location?.id === 126}>
          <i
            className={`bx bxs-skip-next-circle ${locationIndex > 18 || location?.id === 126 ? 'location__btn--disabled' : 'location__btn--icon'}`}
          >
          </i>
        </button>
      </div>
    </div>
  )
}

export default LocationCard