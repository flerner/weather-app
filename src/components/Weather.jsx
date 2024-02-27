import CurrentWeather from './CurrentWeather'
import SearchBar from './SearchBar'
import './Weather.css'
function Weather() {
  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=paris&minPopulation=1000000';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0ef78181a3mshb5404a53d2bef21p1801d2jsncd57e54f1e6d',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className='container'>
      <div className="search-bar">
        <SearchBar onSearchChange={handleOnSearchChange} />
      </div>
      <CurrentWeather />
    </div>
  )
}
export default Weather