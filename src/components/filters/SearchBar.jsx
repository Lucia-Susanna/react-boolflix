import { useGlobalContext } from "../../contexts/GlobalContext"
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

  const { searchData, handleSearch, fetchData } = useGlobalContext()
  return (
    <div className="searchBar">
      <input type="text" value={searchData} onChange={handleSearch} />
      <button onClick={fetchData} ><FaSearch /></button>
    </div>
  )
}

export default SearchBar
