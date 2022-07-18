import React,{useState, useEffect} from 'react'
import axios from 'axios';

import './App.css'
import SearchBar from './components/searh';



function App() {
  const [users, setUsers ] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      setUsers(res.data)
    })
  },[])
  console.log(users)
  return (
    <div>
      <div className='layout-row justify-content-center mt-50'>
        <div className='layout-column w-30'>
          <SearchBar placeholder="Enter a name.." data={users} />
        </div>
      </div> 
    </div>
  )
}

export default App;