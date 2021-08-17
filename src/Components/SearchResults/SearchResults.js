import React from 'react';
import { Tracklist } from '../Tracklist/Tracklist';
import './SearchResults.css';

export class SearchResults extends React.Component {
    render () {
        return (
            <div className="SearchResults">
                <h2>Results <span><button onClick={this.props.onClear} className="clearButton">Clear</button></span></h2>
                <Tracklist onAdd={this.props.onAdd} tracks={this.props.searchResults} isRemoval={false}/>
            </div>
        )
    }
}