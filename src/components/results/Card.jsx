const Card = (props) => {
  const { id, title, original_title, original_language, vote_average } = props.item
  return (
    <div className="card">
      <li key={id}>
        <h5>{title}</h5>
        <p>{original_title}</p>
        <p>{original_language}</p>
        <p>{vote_average}</p>
      </li>
    </div>
  )
}

export default Card
