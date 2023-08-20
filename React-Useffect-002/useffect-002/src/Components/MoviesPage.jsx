import React, { useContext, useEffect } from 'react'
import { AuthContext } from './Context'
import axios from 'axios'
import Navbar from './Navbar'
import MoviesCard from './MoviesCard'

const MoviesPage = () => {
    const {  setmovies, searchMovie, seterror, error } = useContext(AuthContext)

    useEffect(() => {
        const moviesdata = () => {

            // axios.get(`https://www.omdbapi.com/?apikey=2a34b4f2&s=${searchMovie}`).then((res) => {
            axios.get(`https://www.omdbapi.com/?s=${searchMovie}&apikey=2a34b4f2`).then((res) => {

                console.log(res.data);
                setmovies(res.data.Search)
                if (res.data.Response === "True") {
                    setmovies(res.data.Search)
                    seterror("")
                } else {
                    seterror(res.data.Error)

                }
            }).catch((error) => {
                alert("data found error")
            })
        }
        moviesdata()
    }, [searchMovie])
    return (
        <div className='MoviesPage'>
            <Navbar />

            <div className="moviesCardsContainer">
                <h1 style={{ color: "red" }}>{error}</h1>
                <MoviesCard />
            </div>
        </div>
    )
}

export default MoviesPage