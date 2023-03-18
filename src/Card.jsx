import React from "react";
import starIcon from "./pictures/star-icon.svg";

function Card({ data }) {
  const {
    Title,
    Genre,
    Rated,
    Released,
    Runtime,
    imdbRating,
    Poster,
    Plot,
    Actors,
  } = data;
  return (
    <>
      <div className="movieInfo">
        <img src={Poster} alt="Movie's poster" />
        <div>
          <h2>{Title}</h2>
          <div className="movieRating">
            <img src={starIcon} />
            <h4>{imdbRating}</h4>
          </div>
          <div className="movieDetails">
            <span>Rate: {Rated}</span>
            <span>Year: {Released}</span>
            <span>Time: {Runtime}</span>
          </div>
          <div className="genre">
            <div>{Genre.split(",")}</div>
          </div>
        </div>
      </div>
      <h3>Plot:</h3>
      <p>{Plot}</p>
      <h3>Cast:</h3>
      <p>{Actors}</p>
    </>
  );
}

// If a movie doesn't exist in the database
export const movieIsNotExist = () => {
  return (
    <>
      <h3 className="msg">{`The movie doesn't exist!`}</h3>
    </>
  );
};

// If error occured
export const errorData = () => {
  return (
    <>
      <h3 className="msg">An error occured!</h3>
    </>
  );
};

export default Card;
