
const ResultSection = (prop) => {
  const list = prop.list
  return (
    <section>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <h5>{item.title}</h5>
            <p>{item.original_title}</p>
            <p>{item.original_language}</p>
            <p>{item.vote_average}</p>
          </li>
        ))}
      </ul>

    </section>
  )
}

export default ResultSection
