import React from 'react'

// Module for sorting by grade, this is referenced in MovieList.js at ln: 103.
export default function GradeSort(props) {

    // The sort method compares a to b and sort the content depending en the returned value.
    function sortGrades(){
        const doSort = [...props.movies].sort(function(a, b) {
            if (a.grade < b.grade) {
                return 1;
            }
            if (a.grade > b.grade) {
                return -1;
            }
            return 0;
        });
        props.setMovies(doSort); // Refreshes the array containing the movies in sorted order.
    }

    // Returns the module content
    return (
        <div>
            <button onClick={sortGrades} className="btn btn-primary">Sort by grade</button>
        </div>
    )
}
