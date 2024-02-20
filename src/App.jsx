import "./App.css"
import SearchBar from "./components/SearchBar.jsx"
import CurrentWeather from "./components/CurrentWeather.jsx"
function App() {
  return (
    <div className='container'>
      <SearchBar />

      <CurrentWeather></CurrentWeather>
    </div>
  )
}

export default App
