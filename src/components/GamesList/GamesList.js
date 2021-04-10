import React from 'react';
import games from '../../static_data';
import GameCard from '../GameCard/GameCard';
import './GamesList.css';

class GamesList extends React.Component {
    render() {
        return (
            <div className="games-grid">
                    {games.map(game => {
                        return (
                        <GameCard 
                            key={game.id}
                            imageSource={game.imageSource}
                            name={game.name}
                            price={game.price}
                            support={game.support}
                        />
                    )})}
                </div>
        )
    }
}

export default GamesList;