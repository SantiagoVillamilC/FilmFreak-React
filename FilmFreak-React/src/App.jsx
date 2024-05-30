
import React from "react";

import { Nav } from "./assets/components/nav/nav";
import { Home } from "./assets/components/home/home";

import { Routes, Route} from 'react-router-dom';
import { Movie } from "./assets/components/movie/movie";


export const App = ()=> {

  return (
    <>
      <Nav/>

      {/* Estipulamos las rutas */}

        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path="/movie" element={<Movie/>}/>
       </Routes>


    </>
  )

}
