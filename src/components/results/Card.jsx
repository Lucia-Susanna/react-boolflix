import { FaRegStar, FaStar } from "react-icons/fa"

const Card = (props) => {
  const { id, title, name, original_title, origiale_name, original_language, vote_average, poster_path, overview } = props.item

  const printStars = (rate) => {
    let starsRating = []
    let formatRate = Math.round(rate / 2)

    for (let i = 0; i < 5; i++) {
      if (i < formatRate) {
        starsRating.push(<FaStar />)
      } else {
        starsRating.push(<FaRegStar />)
      }

    }
    return starsRating
  }

  return (
    <div className="card">
      <div className="cover">
        <img src={poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}` : 'https://placehold.co/342x500'} alt={title} />
      </div>
      <div className="detail">
        <h3>Titolo: {title || name}</h3>
        <p>Titolo originale: {original_title || origiale_name}</p>
        <p className="overview">Descrizione:{overview}</p>
        <img src={`https://flagsapi.com/${original_language === 'en' ? 'GB' : original_language.toUpperCase()}/flat/32.png`} alt={original_language.toUpperCase()} />
        <p className="rating"> Voto: {printStars(vote_average)} </p>
      </div>
    </div>
  )
}

export default Card
