import CurrentWeather from './CurrentWeather'
import SearchBar from './SearchBar'
import './Weather.css'
function Weather(){
    return(
    <div className='container'>
      <div className="search-bar"><SearchBar /></div>
      <CurrentWeather/>
    </div>
    )
}
export default Weather