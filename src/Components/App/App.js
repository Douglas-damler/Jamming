import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';


export class App extends React.Component {
   constructor(props) {
      super(props); 
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
      this.clearSearchResults = this.clearSearchResults.bind(this);
      this.state = {
         searchResults: [],

         playlistName: "My Favorite",
         playlistTracks: [] 
      };
   }

   clearSearchResults() {
     this.setState({
        searchResult: []
     })
   }

   

   addTrack(track) {
     let tracks = this.state.playlistTracks;
     if (!tracks.includes(track)) {
        tracks.push(track)
        this.setState({
           playlistTracks: tracks
        })
  }
         }
   
   search(searchTerm) {
      Spotify.search(searchTerm).then((searchResult) => {
         this.setState({
            searchResults: searchResult
         })
      })
   }

   removeTrack(track) {
      const newPlaylist = this.state.playlistTracks.filter(song => song.id !== track.id);
      this.setState({
         playlistTracks: newPlaylist
      });
   }

   updatePlaylistName(name) {
      this.setState({
         playlistName: name
      });
   }

   savePlaylist() {
      let trackURIs = [];
      for (let index =0; index < this.state.playlistTracks.length; index++) {
         trackURIs.push(this.state.playlistTracks[index].uri);
      }
   }


   render() {
      return (
         <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
               <SearchBar onSearch={this.search} />
               <div className="App-playlist">

                  <SearchResults 
                     searchResults={this.state.searchResults} 
                     onAdd={this.addTrack}
                     onClear={this.clearSearchResults}
                  />

                  <Playlist 
                     onNameChange={this.updatePlaylistName}
                     playlistName={this.state.playlistName} 
                     playlistTracks={this.state.playlistTracks} 
                     onRemove={this.removeTrack} 
                     onSave={this.savePlaylist}
                  />
               </div>
            </div>
         </div>
      )
   }
}