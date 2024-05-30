import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const cargarInformacionPelicula = async (movieId, setMovieData, setError) => {
    const apiKey = 'cace972f4626db6a5ee3ae755a24b03d';

    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-MX`);
        const data = await respuesta.json();
        setMovieData(data);
    } catch (error) {
        setError(error.message);
    }
};

const cambiarColorTitulos = () => {
    const tituloFrasePelicula = document.getElementById('tituloFrasePelicula');
    tituloFrasePelicula.classList.toggle('cambio-color');
};

export const Movie = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        cargarInformacionPelicula(id, setMovieData, setError);

        const interval = setInterval(cambiarColorTitulos, 7000);

        return () => clearInterval(interval);
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movieData) {
        return <div>Cargando...</div>;
    }

    const {
        backdrop_path,
        title,
        tagline,
        poster_path,
        genres,
        overview,
        original_title,
        original_language,
        status,
        vote_average,
        vote_count,
        runtime,
        budget,
        release_date
    } = movieData;

    const formattedBudget = budget.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const durationString = `${Math.floor(runtime / 60)}h ${runtime % 60}min`;

    const getColorForVoteAverage = (vote) => {
        if (vote >= 7) return '#00E676';
        if (vote >= 5) return '#FFEB3B';
        return '#FF5252';
    };

    const getEmoji = (vote) => {
        if (vote >= 7) return 'bi bi-emoji-smile';
        if (vote >= 5) return 'bi bi-emoji-neutral';
        return 'bi bi-emoji-frown';
    };

    const color = getColorForVoteAverage(vote_average);
    const formattedVoteAverage = Number(vote_average.toFixed(1));

    return (
        <>
            <header id="header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}>
                <div className="headerContainer" id="tituloFrasePelicula">
                    <div className="containerTituloPelicula">
                        <h2 className="tituloPelicula" id="tituloPelicula">{title}</h2>
                        <h3 className="frasePelicula" id="frasePelicula">{tagline}</h3>
                    </div>
                    <div className="container-go-bottom">
                        <p>Desliza hacia abajo</p>
                        <i className="bi bi-arrow-down"></i>
                    </div>
                </div>
            </header>
            <main>
                <section className="container-movie-info">
                    <div id="posterPeli" className="posterPeli">
                        <img className="poster" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="movie poster" />
                    </div>
                    <div className="container-movieInfo">
                        <div className="divisor-movieInfo">
                            <div id="movieInfo" className="movieInfo">
                                <div className="container-titles">
                                    <h2>{title}</h2>
                                    <h3>{tagline}</h3>
                                </div>
                                <div className="container-plot">
                                    <p><strong>Sinopsis:</strong></p>
                                    <p>{overview}</p>
                                </div>
                                <div className="genres-container">
                                    <p><strong>Géneros:</strong></p>
                                    {genres.map((genre) => (
                                        <div className="genre" key={genre.id}><strong>{genre.name}</strong></div>
                                    ))}
                                </div>
                                <div className="original-language-container">
                                    <p><strong>Titulo Original:</strong> {original_title}</p>
                                    <p><strong>Idioma Original:</strong> {original_language}</p>
                                    <p><strong>Estado:</strong> {status}</p>
                                </div>
                            </div>
                            <div className="container-score">
                                <div id="scoreDiv" className="scoreDiv" style={{ backgroundColor: color }}>
                                    <p id="voteAverageElement" className="rating-circle"><strong>{formattedVoteAverage}</strong></p>
                                </div>
                                <div id="scoreFace" style={{ color }}>
                                    <i className={getEmoji(formattedVoteAverage)}></i>
                                </div>
                                <p className="votes-count"><strong>{vote_count}</strong> votos</p>
                            </div>
                        </div>
                        <div id="barInfo" className="barInfo">
                            <div className="bar-info-icon">
                                <i className="bi bi-calendar3"></i>
                                <p><strong>Lanzamiento:</strong> {release_date}</p>
                            </div>
                            <div className="bar-info-icon">
                                <i className="bi bi-clock"></i>
                                <p><strong>Duración:</strong> {durationString}</p>
                            </div>
                            <div className="bar-info-icon">
                                <i className="bi bi-cash-coin"></i>
                                <p><strong>Presupuesto:</strong> {formattedBudget}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}