import React, { Component } from 'react';
import './App.css';
import dummyStore from './dummy-store';
import Note from './Note/Note'
import Nav from './Nav/Nav';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FolderRoute from './FolderRoute/FolderRoute';
import NoteFull from './NoteFull/NoteFull';

class App extends Component{
  state={
    notes: [],
    folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 500);
  }

renderMain(){
  return (
    this.state.notes.map(note => (
    
      <Note className="note"
        name = {note.name}
        modified = {note.modified}
        id= {note.id}
      />
    ))
  )
}

renderNav(){
  return(
    this.state.folders.map(folder => (
    <Nav
      name = {folder.name}
      path = {folder.id}
    />
  ))
  )
}


render(){
  return(
    <div className="App">
      <div className="noteful">
      <Link className="notefulLink" to = '/'>
        Noteful
      </Link>
      </div>

      <nav className="folderNav">{this.renderNav()}</nav>
    <main>
      <Route 
       exact path= '/' >
        {this.renderMain()}
      </Route>

      <Route 
        path='/folder/:folderId'
        render= {(props) => <FolderRoute {...props} state={this.state} />}
      >
      </Route>

      <Route 
        path='/note/:noteId'
        render={(props) => <NoteFull {...props} state={this.state} />}
      />
    
    </main> 
    </div>
  )

}

}

export default App;
