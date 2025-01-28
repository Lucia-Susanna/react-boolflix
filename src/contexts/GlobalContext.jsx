import { createContext, useContext, useState } from "react";
import axios from "axios"
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [searchData, setSearchData] = useState('')
  const [movieList, setMovieList] = useState([])
  const apiUrl = "https://api.themoviedb.org/3/search/movie?"
  const apiKey = "4873e3675051455b7a72a3ca92219657"
  const query = searchData

  const handleSearch = (e) => {
    setSearchData(e.target.value)
    console.log(searchData);
  }

  const fetchData = () => {
    axios.get(`${apiUrl}api_key=${apiKey}&query=${query}`)
      .then(res => {
        setMovieList(res.data.results);

      })
  }
  console.log(movieList);

  return (
    <GlobalContext.Provider value={{ searchData, handleSearch, fetchData, movieList }}>
      {children}
    </GlobalContext.Provider>

  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }