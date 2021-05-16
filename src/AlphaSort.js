import React from 'react'

export default function AlphaSort(props) {

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
        props.setMovies(doSort);
    }

    return (
        <div>
            <button onClick={sortAll} className="btn btn-primary">Alphabetic Sort</button>
        </div>
    )
}
