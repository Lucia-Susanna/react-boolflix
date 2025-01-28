import ResultSection from "./results/ResultSection"
import { useGlobalContext } from "../contexts/GlobalContext"
const Main = () => {
  const { moviesList, seriesList } = useGlobalContext()

  return (
    <main>
      <div className="container">
        <h2>{moviesList.length > 0 ? 'Elenco dei film:' : 'cerca un film'}</h2>
        <ResultSection list={moviesList} />
        <h2>Elenco serie TV:</h2>
        <ResultSection list={seriesList} />

      </div>
    </main>
  )
}

export default Main
