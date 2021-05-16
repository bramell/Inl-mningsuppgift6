import React from 'react';

export default function Movie(props) {

    /*  
    Props allows the function to handle key={movie.id} item={movie} from MovieList.js.
    Movie.id = int (unique for each movie).
    Item is the movie, eg; 
        title: the movie title,
        grade: the movie grade
    ---------------------------------------------
    When the button is clicked the deleteMovie function is
    called with the clicked element id as a parameter.
    ---------------------------------------------
    {props.getStars(props.item.grade)} calls the getStars function
    in MovieList.js with the grade(int) as a parameter.
    ---------------------------------------------
    Return creates a JSX.element which is places in the MovieList <ul></ul>.
    */

    return (
        <li className="list-group-item">
            {props.item.title}
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteMovie(props.item.id)}}>X</button>
            <span className="float-end"> {props.getStars(props.item.grade)} </span>
        </li>
        
    )
}