import React,{useState}from 'react';
import axios from 'axios';


const Movieform=()=>{

    const [movieInfo, setMovieInfo]= useState({name:"", ratings:"", duration:""})
  
    function handleSubmit(e){
      // addMovie()
      e.preventDefault();
      const data = {name:movieInfo.name, ratings:movieInfo.ratings, duration:movieInfo.duration}
      axios.post('http://localhost:5000/movies',data)
        .then(res=>{
        console.log(res.data)
        setMovieInfo(res.data)
        alert("Your movie has been created successfully")
        window.location.reload()
      })  
      .catch(err=>{
        console.log(err)
      })
    }
    return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={e=>{handleSubmit(e)}}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              onChange={e=>setMovieInfo({...movieInfo,name:e.target.value})}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              onChange={e=>setMovieInfo({...movieInfo, ratings:e.target.value})}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              // ref={durationRef} 
              onChange={(e)=>setMovieInfo({...movieInfo, duration:e.target.value})}
            />
            {/* {duration ? "duration" : "no duration"} */}
            {/* {!isValid && <div 
              className='alert error mb-30'
              data-testid='alert'
            >
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>} */}
          </div>
          
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0 btn btn-primary'
              data-testid='addButton'
              >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
  
  
}

export default Movieform


  // const durationRef=useRef(null);


    // useEffect(()=>{
    //   const checkIsValid = ()=>{
    //     console.log(duration)
    //     if(duration){
    //       console.log("duration")
    //     }
    //     else{
    //       console.log("no duration")
    //     }
    //   }
    //   checkIsValid()
    // },[])
  // e.preventDefault();
  //     setDuration(durationRef.current.value);
  //     if(durationRef.current.slice(-1)!="h"||"m"){  
  //       console.log("not valid")
  //       setIsValid(true)
  //   }