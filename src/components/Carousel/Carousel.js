import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';

class Carousel extends React.Component {
    render() {

        const responsive = {
            1024: {
                items: 3
            }
        }

        return (
            <div className="wrapper">
                <div className="container">
                    <AliceCarousel 
                        autoPlay 
                        infinite 
                        disableButtonsControls autoPlayInterval="2000"
                        responsive={responsive}
                        fadeOutAnimation
                    >
                        <div className="img-container">
                            <img 
                            className="image dishonored"
                            src="https://steam.cryotank.net/wp-content/gallery/dishonored2/Dishonored-2-01-HD.png"
                            alt="dishonored"
                            />
                        </div>
                        <div className="img-container">
                            <img 
                            className="image destiny"
                            src="https://909041.smushcdn.com/2203835/wp-content/uploads/2017/05/Destiny-2-Banner-Image-810x400.jpg?lossy=0&strip=0&webp=1"
                            alt="assassins"/>
                        </div>
                        <div className="img-container">
                            <img 
                                className="image fc"
                                src="https://wholesgame.com/wp-content/uploads/Far-Cry-6-Reveal-Banner.jpg"
                                alt="fc6"
                            />
                        </div>
                        <div className="img-container">
                            <img 
                                className="image fifa"
                                src="https://britgamer.s3.eu-west-1.amazonaws.com/styles/full_width_image/s3/2020-06/fifa-21-banner.webp?itok=7mIj5lKA"
                                alt="fifa"
                            />
                        </div>
                        <div className="img-container">
                            <img 
                                className="image watch-dogs"
                                src="https://www.ytgraphics.com/static/1c26bd0238d12ce2b09b68091b8e87a9/cd33f/watch-dogs-2.jpg"
                                alt="watch-dogs"
                            />
                        </div>
                    </AliceCarousel>
                </div>
            </div>
        )
    }
}

export default Carousel;