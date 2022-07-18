import React,{useState} from 'react'

function SearchBar({placeholder, data}) {

  const[filteredData, setFilteredData] = useState([])

  const handleChange = (e)=>{
    const wordEntered = e.target.value;
    const newFilter = data .filter((value)=>{
        return value.name.toLowerCase().includes(wordEntered)
    })
    setFilteredData(newFilter)
  }
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleChange}/>
      </div>
      {filteredData.length !== 0 ? (
        <div className="dataResults">
          {filteredData.map((value, key)=>{
            return <div key={key} className="dataItem">{value.name}</div>
          })}
        </div>
      ) : (<div> <h3>No user found</h3></div>)
      } 
    </div>
  )
}

export default SearchBar;