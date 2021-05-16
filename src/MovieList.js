import React, { useState, useRef } from 'react';
import Movie from './Movie';
import AlphaSort from './AlphaSort';
import GradeSort from './GradeSort';
import './stars.css'
import './misc.css'

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    const titleRef = useRef();
    const gradeRef = useRef();

    function addMovie(event) {
    
        event.preventDefault();
            if (titleRef.current.value === "") {
                alert('You have to add a title');
                return false;
            };

            if(gradeRef.current.value <= 0) {
                alert('You have to add a grade');
                return false;
            };
            
            const movieID = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, {
                id: movieID,
                title: titleRef.current.value,
                grade: gradeRef.current.value
            }]);

            titleRef.current.value = "";
            gradeRef.current.value = "";
    }

    function getStars(grade) {
        const stars = [];
        for (var i = 0; i < grade; i++){
            stars.push(<img src='/star.png' alt='Star'></img>)
        } 
        return stars 
    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    };

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

