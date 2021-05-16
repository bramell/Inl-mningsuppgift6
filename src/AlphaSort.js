import React from 'react'

// Module for alphabetical sort, this is referenced in MovieList.js at ln: 102.
export default function AlphaSort(props) {

    // The sort method compares a to b and sort the content depending en the returned value
    function sortAll(){
        const doSort = [...props.movies].sort(function(a, b) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        props.setMovies(doSort); // Refreshes the array containing the movies in sorted order.
    }

    // Returns the module content
    return (
        <div>
            <button onClick={sortAll} className="btn btn-primary">Alphabetic Sort</button>
        </div>
    )
}
