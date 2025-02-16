import React from 'react'
import MovieCard from '../components/MovieCard'

function Home(){

    const Movies = [
        {id: 1, title: "cars", release_date: "2018"},
        {id: 2, title: "Toy Story", release_date: "1995"},
        {id: 3, title: "The Incredibles", release_date: "2003"},
    ];

    const handleSearch = () => {

    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text' placeholder='Search for movies...' className='search-input'></input>
            </form>
            <button type='submit' className='search-button'>Search</button>
            <div className='movies-grid'>
                {Movies.map ((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
export default Home