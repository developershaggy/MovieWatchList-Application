import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({title,description,year,genre,watchstatus, id}) => {
  const navigate = useNavigate();
  return (
    <div className='moviecard' onClick={()=>{navigate(`/movie/:${id}`)}}>
      <div className='moviecarddetails'>
        <h1>{title}</h1>
        <h6 style={{fontWeight:1000}}>Description</h6>
        <p id='card-description'>{description}</p>
        <h6>Year : {year}</h6>
        <h6>Genre : {genre}</h6>
        <button id='moviecardbutton'>{watchstatus?"watched":"Not Watched"}</button>
          {/* <p>Rating : {movie.ratings.map((rating)=>{return(<p>{rating}</p>)})}</p>
          <p>review : {movie.reviews.map((review)=>{return(<p>{review}</p>)})}</p> */}
      </div>
    </div>
  )
}

export default MovieCard;