import Card from "./Card"
const ResultSection = (prop) => {
  const list = prop.list
  return (
    <section>
      <ul>
        {list.map(item => (
          <Card item={item} />
        ))}
      </ul>

    </section>
  )
}

export default ResultSection
