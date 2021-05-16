import React from 'react'

export default function GradeSort(props) {

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
        props.setMovies(doSort);
    }

    return (
        <div>
            <button onClick={sortGrades} className="btn btn-primary">Sort by grade</button>
        </div>
    )
}
