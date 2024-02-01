import { useEffect } from "react"
import useFetch from "../hook/useFetch"
import './styles/ResidentCard.css'

const LocationCard = ({ residentUrl }) => {

  const [resident, getResident] = useFetch()

  useEffect(() => {
    getResident(residentUrl)
  }, [])

  return (
    <article className="resCard">

      <header className="resCard__header">
        <div className={`resCard__status__container ${resident?.status === 'Alive' || resident?.status === 'Dead' ? (resident?.status).toLowerCase() : 'no-status'}`}>
          <div className="resCard__led"></div>
          <h3 className="resCard__status">{resident?.status}</h3>
        </div>
        <img className="resCard__header__img" src={resident?.image} alt="resident img" />
      </header>

      <section className="resCard__name__container">
        <h2 className="resCard__name">{resident?.name}</h2>
        <hr className="resCard__name__hr" />
      </section>

      <section className="resCard__info__container">
        <div className="resCard__info__div">
          <span className="resCard__info__tittle">Specie</span>
          <span className="resCard__info--content">{resident?.species}</span>
        </div>
        <div className="resCard__info__div">
          <span className="resCard__info__tittle">Origin</span>
          <span className="resCard__info--content">{resident?.origin.name}</span>
        </div>
        <div className="resCard__info__div">
          <span className="resCard__info__tittle">Eppisodes where appear</span>
          <span className="resCard__info--content">{resident?.episode.length}</span>
        </div>
      </section>

    </article>
  )
}

export default LocationCard