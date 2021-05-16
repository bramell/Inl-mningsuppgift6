import React, { useState, useRef } from 'react';
import Movie from './Movie';
import AlphaSort from './AlphaSort';
import GradeSort from './GradeSort';
import './stars.css'
import './misc.css'

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    const titleRef = useRef(); //Reference to input field for the title
    const gradeRef = useRef(); //Reference to input field for the grade

    function addMovie(event) {
    
        event.preventDefault(); // Prevent sending the form, if not included the movies will instantly load and disappear again
            
            // Check if any field is empty and alert the user 
            if (titleRef.current.value === "") {
                alert('You have to add a title');
                return false;
            };

            if(gradeRef.current.value <= 0) {
                alert('You have to add a grade');
                return false;
            };
            
            const movieID = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1; // Give every movie a unique id, to prevent error messages and allow deleteMovies to function
            
            // Add the movie to the array "movies" after 'movies, '
            setMovies([...movies, {
                id: movieID,
                title: titleRef.current.value,
                grade: gradeRef.current.value
            }]);

            // Restores the input fields after a movie is added
            titleRef.current.value = ""; 
            gradeRef.current.value = "";
    }

    // Returns a array of image elements depending on the grade of the movie
    function getStars(grade) {
        const stars = [];
        for (var i = 0; i < grade; i++){
            stars.push(<img src='/star.png' alt='Star'></img>) // Add element to 'stars' array
        } 
        return stars 
    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id)); // For all movies; if not the clicked id, then add to movies array 
    };

    /* 
    The content in this return statement is the visual website content.

    ====================================================
    {movies.map(movie => <Movie key={movie.id} item={movie} getStars={getStars} deleteMovie={deleteMovie} />) }
    ----------------------------------------------------
    The map function: For every movie, create a JXS.element. 
    Item={movie} refers to the content of the movie (eg. title: str, grade: int) which are used by Movie.js and getStars.
    key={movie.id} is used by deleteMovie.
    ----------------------------------------------------

    <AlphaSort movies={movies} setMovies={setMovies} />
    <GradeSort movies={movies} setMovies={setMovies} />
    ----------------------------------------------------
    These are imported modules that allow sorting.
    ====================================================
    */
    return (
        <div>
            <h1>My Movie List</h1>
            <form id="add-movie">
                <fieldset>
                    <legend>Add a movie</legend>

                    <label htmlFor="title"><strong>Title:</strong></label>
                    <input className="form-control" placeholder="Add a new movie..." ref={titleRef}></input>

                    <label htmlFor="title"><strong>Grade:</strong></label>
                    <select type="text" className="form-control" ref={gradeRef}>
                    <option value="0">Choose grade...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="btn btn-success mt-3" onClick={addMovie}></input>
                </fieldset>
            </form>

            <h2>My movies:</h2>
            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} getStars={getStars} deleteMovie={deleteMovie} />) }
            </ul>
            <div className="sort-btns">
            <AlphaSort movies={movies} setMovies={setMovies} />
            <GradeSort movies={movies} setMovies={setMovies} />
            </div>
        </div>
    ) 
}

