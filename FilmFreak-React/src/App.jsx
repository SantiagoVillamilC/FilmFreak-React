
import React from "react";

import { Nav } from "./assets/components/nav/nav";
import { Home } from "./assets/components/home/home";

import { Routes, Route} from 'react-router-dom';


export const App = ()=> {

  return (
    <>
      <Nav/>

      {/* Estipulamos las rutas */}

        <Routes>
          <Route path = "/" element = {<Home/>}/>
       </Routes>


    </>
  )

}
