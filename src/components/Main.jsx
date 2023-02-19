import axios from 'axios'
import React, { useEffect } from 'react'
import requests from '../Requests'

const Main = () => {
     const [movies, setmovies] = usestate([])
     const movie = movies[Math.floor(Math.random() * movies.length)];


     useEffect(()=> {
        axios.get(requests.requestPopular).then((Response)=>{
            setmovies(response.data.results)
        })
     },[])
     console.log(movies)



  return (
    <div>Main</div>
  )
}

export default Main