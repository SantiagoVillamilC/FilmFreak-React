import React from "react";

import { Link } from 'react-router-dom'
import Styles from './nav.module.css';


export const Nav = ()=>{

    const navStyles = {
        color: "#fff",
        fontSize: "1.5em",
    }

    return(
        <>
            <nav>

                <Link to={"/"} style={navStyles}>
                    <h2>Logo</h2>
                </Link>

                <ul className={Styles.nav_list}>
                   <Link to={"/About"} style={navStyles}>
                        <li>About</li>
                   </Link> 
                    <Link to={"/Users"} style={navStyles}>
                        <li>Users</li>
                    </Link>
                </ul>

            </nav>
        </>
    )
};