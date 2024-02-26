import "./SearchBar.css"
function SearchBar() {
  return (
    <>
      <div className='header-fields'>
          <input type='text' placeholder='Tokyo, Madrid, Paris...' />
          <button>Find</button>
      </div>
    </>
  )
}
export default SearchBar
