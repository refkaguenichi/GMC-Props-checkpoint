import React from "react";
import Movie from "./Movie";
import "./MoviesCards.css";

const handleName = (name) => {
  alert("The movie is called: " + name);
};

const MoviesCards = ({ items }) => {
  return (
    <div>
      <div className="moviesData">
        {items.map((el) => (
          <Movie movie={el} key={el.id} handleName={handleName} />
        ))}
      </div>
    </div>
  );
};

export default MoviesCards;
