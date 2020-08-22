import React from 'react';
import './Track.css';

class Track extends React.Component {

    renderAction() {
        if (this.this.props.isRemoval) {
            return <buttton className="Track-actions">-</buttton>
        } else {
            return <buttton className="Track-action">+</buttton>
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track name will go here</h3>
                    <p>track artist | track album </p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}