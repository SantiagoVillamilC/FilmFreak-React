import React from "react";
import Styles from './home.module.css';

export const Home = () => {
    return (
        <>
            <section className={Styles.more_popular_hero}>
                <a href="" className={Styles.headerURL} id="headerURL">
                    <div className={Styles.container_principal_popular}>
                        <div className={Styles.container_backdrop_popular} id="myHeader">
                        </div>
                        <div className={Styles.container_info_popular}>
                            <div className={Styles.format_container_info_popular}>
                                <img className={Styles.poster_popular} id="posterHeaderPopular" src="" alt="poster"></img>
                                <div class={Styles.play_button}><i class="bi bi-play-circle-fill"></i></div>
                                <div className={Styles.titles_popular}>
                                    <h2 id="titlePopular" class="raleway-bold">Titulo</h2>
                                    <p id="generosPopular" class="raleway-normal">Frase</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </section>

            <a href="search.html">
                <section class="container-invitation-filter raleway-bold">
                    <p>¿Buscas una pelicula?</p>
                    <p>Presiona aquí</p>
                </section>
            </a>
            <main>
                <section class="section-in-theaters" id="sectionTeatros">
                    <h3 class="raleway-bold">Ahora mismo en teatros</h3>
                    <div class="contenedorTeatros raleway-normal" id="containerTheaters"></div>
                </section>
                <section class="section-popular" id="sectionPopular">
                    <div class="header-section-pelis">
                        <h3 class="raleway-bold">Populares</h3>
                        <div class="paginacion raleway-normal">
                            <button id="btnAnterior"><i class="bi bi-arrow-left-circle-fill"></i></button>
                            <p id="paginaPopular"></p>
                            <button id="btnSiguiente"><i class="bi bi-arrow-right-circle-fill"></i></button>
                        </div>
                    </div>
                    <div class="contenedor" id="contenedor"></div>
                </section>
                <section class="section-top-rated">
                    <div class="header-section-pelis">
                        <h3 class="raleway-bold">Lo mejor valorado</h3>
                        <div class="paginacion raleway-normal">
                            <button id="btnAnteriorTopRated"><i class="bi bi-arrow-left-circle-fill"></i></button>
                            <p id="mostrarPaginaTopRated"></p>
                            <button id="btnSiguienteTopRated"><i class="bi bi-arrow-right-circle-fill"></i></button>
                        </div>
                    </div>
                    <div class="contenedor" id="contenedorTopRated"></div>
                </section>
                <section class="section-trailers" id="sectionTrailers">
                    <h3 class="raleway-bold">Trailers & Videos</h3>
                    <div class="contenedorTrailers" id="contenedorTrailers"></div>
                </section>
            </main>
        </>
    )
}

