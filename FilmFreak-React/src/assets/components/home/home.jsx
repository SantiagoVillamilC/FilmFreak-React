import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Styles from './home.module.css';

const cargarCincoPopulares = async (setPopulares, setError) => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=cace972f4626db6a5ee3ae755a24b03d&Language=es-MX&page=1`);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            const populares = datos.results.slice(0, 5);
            setPopulares(populares);
        } else if (respuesta.status === 401) {
            setError('Error de comunicación con el servidor');
        } else if (respuesta.status === 404) {
            setError('Película no encontrada');
        } else {
            setError('Hubo un error');
        }
    } catch (error) {
        setError(error.message);
    }
};

export const Home = () => {

    const [populares, setPopulares] = useState([]);
    const [index, setIndex] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        cargarCincoPopulares(setPopulares, setError);

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % 5);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (populares.length === 0) {
        return <div>Cargando...</div>;
    }

    const popularObj = populares[index];
    
    return (
        <>
            <section className={Styles.more_popular_hero}>
                <Link to={`/movie/${popularObj.id}`} className={Styles.headerURL}>
                    <div className={Styles.container_principal_popular}>
                        <div className={Styles.container_backdrop_popular} id="myHeader" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularObj.backdrop_path})` }}>
                        </div>
                        <div className={Styles.container_info_popular}>
                            <div className={Styles.format_container_info_popular}>
                                <img className={Styles.poster_popular} id="posterHeaderPopular" src={`https://image.tmdb.org/t/p/original/${popularObj.poster_path}`} alt="poster"></img>
                                <div className={Styles.play_button}><i className="bi bi-play-circle-fill"></i></div>
                                <div className={Styles.titles_popular}>
                                    <h2 id="titlePopular" className="raleway-bold">{popularObj.title}</h2>
                                    <p id="generosPopular" className="raleway-normal">{popularObj.release_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            <Link to="/search">
                <section className="container-invitation-filter raleway-bold">
                    <p>¿Buscas una película?</p>
                    <p>Presiona aquí</p>
                </section>
            </Link>
            <main>
                <section className="section-in-theaters" id="sectionTeatros">
                    <h3 className="raleway-bold">Ahora mismo en teatros</h3>
                    <div className="contenedorTeatros raleway-normal" id="containerTheaters"></div>
                </section>
                <section className="section-popular" id="sectionPopular">
                    <div className="header-section-pelis">
                        <h3 className="raleway-bold">Populares</h3>
                        <div className="paginacion raleway-normal">
                            <button id="btnAnterior"><i className="bi bi-arrow-left-circle-fill"></i></button>
                            <p id="paginaPopular"></p>
                            <button id="btnSiguiente"><i className="bi bi-arrow-right-circle-fill"></i></button>
                        </div>
                    </div>
                    <div className="contenedor" id="contenedor"></div>
                </section>
                <section className="section-top-rated">
                    <div className="header-section-pelis">
                        <h3 className="raleway-bold">Lo mejor valorado</h3>
                        <div className="paginacion raleway-normal">
                            <button id="btnAnteriorTopRated"><i className="bi bi-arrow-left-circle-fill"></i></button>
                            <p id="mostrarPaginaTopRated"></p>
                            <button id="btnSiguienteTopRated"><i className="bi bi-arrow-right-circle-fill"></i></button>
                        </div>
                    </div>
                    <div className="contenedor" id="contenedorTopRated"></div>
                </section>
                <section className="section-trailers" id="sectionTrailers">
                    <h3 className="raleway-bold">Trailers & Videos</h3>
                    <div className="contenedorTrailers" id="contenedorTrailers"></div>
                </section>
            </main>
        </>
    )
}

