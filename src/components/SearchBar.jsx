import "./SearchBar.css"
function SearchBar() {
  return (
    <>
      <div className='header-fields'>
        <label>Find your city</label>
        <div className='header-fileds-input'>
          <input type='text' placeholder='Tokyo, Madrid, Paris...' />
          <button>Find</button>
        </div>
      </div>
    </>
  )
}
export default SearchBar
