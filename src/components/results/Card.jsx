import { FaRegStar, FaStar } from "react-icons/fa"

const Card = (props) => {
  const { id, title, name, original_title, origiale_name, original_language, vote_average, poster_path } = props.item

  function printStars(rate) {
    let starsRating = []
    let formatRate = Math.round(rate / 2)

    for (let i = 0; i < 5; i++) {
      if (i < formatRate) {
        starsRating.push(<FaStar />)
      } else {
        starsRating.push(<FaRegStar />)
      }

    }
    console.log(starsRating);

    return starsRating
  }


  console.log(printStars(vote_average));

  return (
    <div className="card">
      <img src={poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : 'https://placehold.co/200x300'} alt={title} />
      <h5>{title || name}</h5>
      <p>{original_title || origiale_name}</p>
      <img src={`https://flagsapi.com/${original_language === 'en' ? 'GB' : original_language.toUpperCase()}/flat/32.png`} alt={original_language.toUpperCase()} />
      <p className="rating"> {printStars(vote_average)} </p>
    </div>
  )
}

export default Card
