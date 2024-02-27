import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import "./SearchBar.css"
import { BASE_GEO_URL, API_OPTIONS } from "../apis/GeodbApi.js"
function SearchBar({ onSearchChange }) {
  const [search, setSearch] = useState(null)
  const handleOnSearchChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  const loadOptions = (inputValue) => {
    return fetch(`${BASE_GEO_URL}&namePrefix=${inputValue}`, API_OPTIONS)
      .then(res => res.json())
      .then(data => {
        return {
          options: data.data.map(city => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.country}`
            }
          })
        }
      })

  }
  return (
    <div className="header-fields">
      <AsyncPaginate
        className="input-city"
        placeholder="Tokyo, Paris..."
        debounceTime={600}
        value={search}
        onChange={handleOnSearchChange}
        loadOptions={loadOptions}
      />
      <button>Find</button>
    </div>
  )
}
export default SearchBar
