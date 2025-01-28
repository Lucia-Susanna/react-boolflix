const Card = (props) => {
  const { id, title, name, original_title, origiale_name, original_language, vote_average } = props.item
  return (
    <div className="card">

      <h5>{title ? title : name}</h5>
      <p>{original_title ? original_title : origiale_name}</p>
      <img src={`https://flagsapi.com/${original_language === 'en' ? 'GB' : original_language.toUpperCase()}/flat/32.png`} alt={original_language.toUpperCase()} />
      <p>{vote_average}</p>

    </div>
  )
}

export default Card
