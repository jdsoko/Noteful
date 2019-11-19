import React from 'react';
import { Link } from 'react-router-dom'
import './Note.css'


export default function Note(props) {
    
    
    return (
        <div className="note">
            <Link className="title" to={`/note/${props.id}`}>Title: {props.name}</Link>
            <p className="date">Date modified: {props.modified}</p>
            <button className="delete">remove</button>
        </div>
    )
}