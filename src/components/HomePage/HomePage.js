import React from 'react';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import GamesList from '../GamesList/GamesList';
import Navbar from '../Navbar/Navbar';

class HomePage extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <Navbar />
                <Carousel />
                <GamesList />
                <Footer />
            </div>
        );
    }
}

export default HomePage;