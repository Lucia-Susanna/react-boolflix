import { useGlobalContext } from "../../contexts/GlobalContext"

const SearchBar = () => {

  const { searchData, handleSearch, fetchData } = useGlobalContext()
  return (
    <div>
      <input type="text" value={searchData} onChange={handleSearch} />
      <button onClick={fetchData} >Cerca</button>
    </div>
  )
}

export default SearchBar
