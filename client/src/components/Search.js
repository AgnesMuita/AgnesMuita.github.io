import axios from 'axios'
import React,{useState, useEffect} from 'react';

function Search() {
  const [oneMovie, setOneMovie] = useState([])
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/movies/`)
    .then(res=>{
      setOneMovie(res.data.data)
    })
  },[])
  const handleFilter =(e)=>{
    const searchWord = e.target.value
    const newFilter = oneMovie.filter((value)=>{
        return value.name.toLowerCase().includes(searchWord);
    })
    if(searchWord == ""){
      setFilteredData([])
   }else{
    setFilteredData(newFilter)   
    }
  }
 return ( 
    <div>
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        // value={val}
        onChange ={handleFilter}
      />
    </section>
      <ul
        data-testid='moviesList'
         className='styled w-100 pl-0' 
      >
      <li 
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >
        {filteredData.length != 0 ? (
        <div>
          {filteredData.slice(0,3).map((element, i)=>{
          return <div key={i}>
            <div className='layout-column w-10'>
              <h3 style={{fontSize:'14px'}}>{element.name}</h3>
              <p className='my-0' style={{fontSize:'12px'}}>Ratings:{element.ratings}</p>
            </div>
            <div className='layout-row my-auto mr-20'>
              <p className='justify-content-end' style={{fontSize:'12px'}}>Duration:{element.duration}</p>
            </div>         
          </div>
          })}
        </div>
        
      ):  (<div data-testid='noResult'>
            <h3 className='text-center' style={{fontSize:'15px'}}>No Movie Found</h3>
          </div>)}       
      </li>
      </ul>
    </div>
  )
 
}

export default Search
