import React, { useState } from "react";
import db from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const AddMovie = () => {
  // temporary states will be managed by redux in the future
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [year, setyear] = useState("");
  const [genre, setgenre] = useState("");
  const [watchstatus, setwatchstatus] = useState(false);
  const [rating, setrating] = useState("");
  const [review, setreview] = useState("");

  // firebase congig for the database
  const movielistRef = collection(db,"movielist");
  const submithandler = async () => {
    await addDoc(movielistRef,{title:title, description:description, year:year, genre:genre, watchstatus:watchstatus, ratings:[rating], reviews:[review],});
    alert("movie added to the list successfully, please checkout the home page")
    settitle("");
    setdescription("");
    setyear("");
    setgenre("")
    setwatchstatus(false);
    setreview([]);
    setrating([]);
  };
  return (
    <>
      <h3 id="addformheading">Add New Movie</h3>
      <div className="form">
        <div className="addmovie">
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="title..."
            required
          />
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Description..."
            required
          />
          <br />
          <input
            type="number"
            value={year}
            onChange={(e) => setyear(e.target.value)}
            placeholder="Release Year..."
            required
          />
          <br />
          <input
            type="text"
            value={genre}
            onChange={(e) => setgenre(e.target.value)}
            placeholder="genre..."
            required
          />
          <br />
          <input
            type="number"
            value={rating}
            required
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
            required
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
                  required
                />
              </label>
            </div>
            <button type="submit" onClick={() => submithandler()}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
