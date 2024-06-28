import React from 'react'
import { useState, useEffect } from 'react';
import db from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import MovieCard from './MovieCard';



export const MovieList = () => {
  const [movieList, setmovieList] = useState([])
  const movielistRef = collection(db,"movielist");
  useEffect(()=>{
    const getList = async()=>{
      const data = await getDocs(movielistRef);
      const docsref = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
      setmovieList(docsref);
      
    }
    getList();
  },[movieList])
  const data = movieList;
  return (
    <div className='movielist'>
    {data.map((movie)=>{
      return(
        <div className='listcard'>
          <MovieCard title={movie.title} description={movie.description} year={movie.year} watchstatus={movie.watchstatus} id={movie.id} genre={movie.genre}/>
        </div>
      )
    })}
    </div>
  )
}
