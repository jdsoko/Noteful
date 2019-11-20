import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav(props){
    
    return(
        <div className= "nav">
            <NavLink className="navLink" to={`/folder/${props.path}`}>
                {props.name}
            </NavLink>
        </div>
    )

}