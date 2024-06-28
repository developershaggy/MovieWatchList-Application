import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import db from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
const EditMovie = () => {


  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [year, setyear] = useState("");
  const [genre, setgenre] = useState("");
  const [watchstatus, setwatchstatus] = useState(false);
  const [rating, setrating] = useState("");
  const [review, setreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const sanitizedUserId = id.replace(/[^a-zA-Z0-9_-]/g, "");



  const fetchdata=async()=>{
    const docRef = doc(db, "movielist", sanitizedUserId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const movieData = docSnap.data()
      settitle(movieData.title);
          setdescription(movieData.description);
          setyear(movieData.year);
          setgenre(movieData.genre);
          setwatchstatus(movieData.watchstatus);
    } else {
      console.log('No such document!');
    }
  }
  useEffect(() => {
    fetchdata(sanitizedUserId);
  }, []);


  const updateData =async(id)=>{
    const docRef = doc(db, "movielist", id);
    const newData = {title:title, description:description, year:year, genre:genre, watchstatus:watchstatus, reviews:review, ratings:rating}
    await updateDoc(docRef, newData);
  }

  const submithandler=(id)=>{
    const confirmed = window.confirm(
      "Are you sure you want to change Watch status?"
    );
    if (confirmed) {
      updateData(id);
      navigate(`/movie/:${sanitizedUserId}`);
    }
  }
  return (
    <>
      <h3 id="addformheading">Update Movie Details</h3>
      <div className="form">
        <div className="addmovie">
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="title..."
          />
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Description..."
          />
          <br />
          <input
            type="number"
            value={year}
            onChange={(e) => setyear(e.target.value)}
            placeholder="Release Year..."
          />
          <br />
          <input
            type="text"
            value={genre}
            onChange={(e) => setgenre(e.target.value)}
            placeholder="genre..."
          />
          <br />
          <input
            type="number"
            value={rating}
            onChange={(e) => setrating(e.target.value)}
            min={0}
            max={10}
            placeholder="rating 1-10"
          />
          <br />
          <textarea
            placeholder="write your review here"
            className="form-control"
            id="review"
            rows="3"
            value={review}
            onChange={(e) => setreview(e.target.value)}
          ></textarea>
          <br />
          <div id="lowerinputfields">
            <div>
              <label htmlFor="watched">
                Watched
                <input
                  type="checkbox"
                  checked={watchstatus}
                  onChange={(e) => setwatchstatus(e.target.value)}
                  id="inputcheckbox"
                  name="watched"
                />
              </label>
            </div>
            <button onClick={() => submithandler(sanitizedUserId)}>Update</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditMovie;