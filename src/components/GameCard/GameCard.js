import { faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './GameCard.css';

class GameCard extends React.Component {
    render() {
        const isCompatible = this.props.support === "all";
        return (
            <div className="card">
                <div className="card-img">
                    <img 
                        className="card-image"
                        src={this.props.imageSource}
                        alt="watch-dogs"
                    />
                </div>
                <div className="card-info">
                    <h4>{this.props.name}</h4>
                    <div className="card-footer">
                        <p>{this.props.price}</p>
                        {/* using conditional rendering here*/}
                        {isCompatible 
                        ? (
                            <div className="logos">
                                <FontAwesomeIcon 
                                    className="icon"
                                    icon={faWindows} 
                                />
                                <FontAwesomeIcon 
                                    className="icon"
                                    icon={faPlaystation} 
                                />
                                <FontAwesomeIcon 
                                    className="icon"
                                    icon={faXbox} 
                                />
                            </div>)
                         : 
                            (
                            <div className="logos">
                                <FontAwesomeIcon 
                                    className="icon"
                                    icon={faWindows} 
                                />
                                <FontAwesomeIcon 
                                    className="icon"
                                    icon={faXbox} 
                                />
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default GameCard;