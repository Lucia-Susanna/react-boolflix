import ResultSection from "./results/ResultSection"
import { useGlobalContext } from "../contexts/GlobalContext"
const Main = () => {
  const { movieList } = useGlobalContext()

  return (
    <div>
      <h2>elenco dei film:</h2>
      <ResultSection list={movieList} />

    </div>
  )
}

export default Main
