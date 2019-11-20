import React, { Component } from 'react';
import Note from '../Note/Note';
import './NoteFull.css'
import Back from '../Back/Back';

export default class NoteFull extends Component{
    render(){
        

        const renderNote = this.props.state.notes.map(note =>(
            note.id === this.props.match.params.noteId
            && <div>
                <h3 className="folderName">Folder: {this.props.state.folders.map(folder =>(
                    note.folderId === folder.id 
                    && <span>{folder.name}</span>
                ))}</h3>
                <Note className="note" 
                    name = {note.name}
                    modified = {note.modified}
                    id = {note.id}
                    />
                    <p className="content">{note.content}</p>
                </div>
            
            
            
        ))

        return(
             <div>
            {renderNote}
            <Back/>
            </div>   
        )
    }

}