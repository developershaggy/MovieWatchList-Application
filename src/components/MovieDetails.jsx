import React, { useState } from "react";
import db from "../firebase-config";
import {
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState("");
  const { id } = useParams();
  const sanitizedUserId = id.replace(/[^a-zA-Z0-9_-]/g, "");

  const updateWatchStatus = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to change Watch status?"
    );
    if (confirmed) {
      const docRef = doc(db, "movielist", id);
      const newWatchStatus = { watchstatus: !data.watchstatus };
      await updateDoc(docRef, newWatchStatus);
    }
  };

  const deleteMovie = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete Movie from the list?"
    );
    if (confirmed) {
      const docRef = doc(db, "movielist", id);
      navigate("/");
      await deleteDoc(docRef);
      alert("movie deleted successfully")
    }
  };

  useEffect(() => {
    const docRef = doc(db, "movielist", sanitizedUserId);
    const snapdata = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists) {
          setdata(docSnap.data());
        } else {
          console.log("No such document!");
        }
      },
      (err) => {}
    );
    return () => snapdata();
  }, [data]);

  return (
        <div className="moviedetailscontainer">
          <div className="moviedetailspage">
            <h1>{data.title}</h1>
            <h3>Description</h3>
            <h5>{data.description}</h5>
            <h5>Release Year : {data.year}</h5>
            <h5>Genre : {data.genre}</h5>
            <button onClick={() => updateWatchStatus(sanitizedUserId)}>
              {data.watchstatus ? "Watched" : "Not Watched"}
            </button>
            <button onClick={() => deleteMovie(sanitizedUserId)}>Delete</button>
            <h3>Rating : {data.ratings}</h3>
            <h5>Review :</h5>
            <br />
            <p>{data.reviews}</p>
            <button onClick={()=>navigate(`/editmovie/:${sanitizedUserId}`)}>Edit</button>
          </div>
        </div>
  );
};
