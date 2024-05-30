import React from "react";

export const Movie = () => {
    return (
        <>
            <header id="header">
                <div class="headerContainer" id="tituloFrasePelicula">
                    <div class="containerTituloPelicula">
                        <h2 class="tituloPelicula" id="tituloPelicula">Titulo</h2>
                        <h3 class="frasePelicula" id="frasePelicula">Frase</h3>
                    </div>
                    <div class="container-go-bottom">
                        <p>Desliza hacia abajo</p>
                        <i class="bi bi-arrow-down"></i>
                    </div>
                </div>
            </header>
            <main>
                <section class="container-movie-info">
                    <div id="posterPeli" class="posterPeli"></div>
                    <div class="container-movieInfo">
                        <div class="divisor-movieInfo">
                            <div id="movieInfo" class="movieInfo"></div>
                            <div class="container-score">
                                <div id="scoreDiv" class="scoreDiv"></div>
                                <div id="scoreFace"></div>
                            </div>
                        </div>
                        <div id="barInfo" class="barInfo">
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}