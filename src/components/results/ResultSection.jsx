import Card from "./Card"
const ResultSection = (prop) => {
  const list = prop.list
  return (
    <section className="row">

      {list.map(item => (
        <Card key={item.id} item={item} />
      ))}


    </section>
  )
}

export default ResultSection
