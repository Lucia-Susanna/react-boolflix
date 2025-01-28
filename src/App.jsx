import Header from "./components/Header"
import Main from "./components/Main"
import { GlobalProvider } from "./contexts/GlobalContext"
const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Main />
    </GlobalProvider>
  )
}

export default App

