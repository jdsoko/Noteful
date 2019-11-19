import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav(props){
    
    return(
        <div className= "nav">
            <Link className="navLink" to={`/folder/${props.path}`}>
                {props.name}
            </Link>
        </div>
    )

}