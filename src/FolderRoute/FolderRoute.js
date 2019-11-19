import React, { Component } from 'react';
import Note from '../Note/Note';
import './FolderRoute.css'


export default class FolderRoute extends Component{
    

    render(){
        const renderNotes = this.props.state.notes.map(note => (
            note.folderId ===  this.props.match.params.folderId 
              && <Note className="note"
                    name = {note.name}
                    modified = {note.modified}
                    id = {note.id}
                  />
            ))

        const renderFolderName = this.props.state.folders.map(folder =>(
            folder.id === this.props.match.params.folderId
            && <h3 className="folderName">Folder: {folder.name}</h3>
        ))
        return(
            <div>
            {renderFolderName}
            {renderNotes}
           
           </div>
        )
    }
    }
    