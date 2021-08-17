import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor (props) {
        super(props);
        this.renderAction = this.renderAction.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);

        
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
       if (this.props.isRemoval) {
           return (
               <button onClick={this.removeTrack} className="Track-action">-</button>
           )
       }
       else {
           return (
               <button onClick={this.addTrack} className="Track-action">+</button>
           )
       }
    };

    

    render () {
        const trackName = this.props.track.name;
        const artist = this.props.track.artist;
        const album = this.props.track.album;
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{trackName}</h3>
                    <p>{artist} | {album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}