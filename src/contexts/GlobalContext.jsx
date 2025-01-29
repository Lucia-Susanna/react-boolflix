import { createContext, useContext, useState } from "react";
import axios from "axios"
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [searchData, setSearchData] = useState('')
  const [moviesList, setMoviesList] = useState([])
  const [seriesList, setSeriesList] = useState([])
  const moviesApiUrl = "https://api.themoviedb.org/3/search/movie?"
  const seriesApiUrl = "https://api.themoviedb.org/3/search/tv?"
  const apiKey = "4873e3675051455b7a72a3ca92219657"
  const query = searchData

  const handleSearch = (e) => {
    setSearchData(e.target.value)
    console.log(searchData);
  }

  const fetchData = () => {
    axios.get(`${moviesApiUrl}api_key=${apiKey}&query=${query}`)
      .then(res => {
        setMoviesList(res.data.results);

      })

    axios.get(`${seriesApiUrl}api_key=${apiKey}&query=${query}`)
      .then(res => {
        setSeriesList(res.data.results)
      })
  }

  return (
    <GlobalContext.Provider value={{ searchData, handleSearch, fetchData, moviesList, seriesList }}>
      {children}
    </GlobalContext.Provider>

  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }