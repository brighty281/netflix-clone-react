import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/Constants'
function RowPost(props) {
  const [movies,setMovie]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((resonse)=>{
        console.log(resonse.data)
        setMovie(resonse.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array empty')
      }
    })
    
  }
  

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
           <img onClick={()=>handlemovie(obj.id)} className={ props.isSmall?'smallposter':'poster' }src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}
       
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
