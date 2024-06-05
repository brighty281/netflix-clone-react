import React, { useEffect ,useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/Constants'
import "./Banner.css";
import axios from '../../axios'
function Banner() {
  const [movie,setMovie]=useState()
  const randomNumber = Math.floor(Math.random() * 21);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[randomNumber]) 
      setMovie(response.data.results[randomNumber])
    })
  },[] )
  return (
    <div 
    style={{backgroundImage: `url(${movie ?imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie? movie.name :" "}</h1>
        <div className='banner-button'>
            <button className='button'>play</button>
            <button className='button'>list</button>
        </div>
        <h1 className='description'>{movie? movie.overview:" "}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
