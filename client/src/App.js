import React from 'react'
import './App.css'
import Movieform from './components/Movieform';
import Search from './components/Search';
import 'h8k-components';



const title = 'Favorite Movie Directory';

function App() {
  return (
    <div>
      <h1 className="navbarh8k">Personal Movie Directory</h1>
      <div className='layout-row justify-content-center mt-50'>
        <div className='w-30 mr-75'>
          <Movieform/>
        </div>
        <div className='layout-column w-30'>
          <Search />
        </div>
      </div> 
    </div>
  )
}

export default App;


