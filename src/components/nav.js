/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from 'react-router-dom';

function nav(){
    return (
        <nav>
            <NavLink to='/' className="nav-link" exact activeClassName="active" tag="a">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="35px" height="35px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
            </NavLink>
        </nav>
    )
};

export default nav;