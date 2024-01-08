import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Products: React.FC = () => {
    return (
        <div className='products'>
            <Carousel>
                <div>
                    <img src="src/assets/picture/IMG-20240108-WA0001.jpg" alt="" />
                    <p>Legend1</p>
                </div>
                <div>
                    <img src="src/assets/picture/IMG-20240108-WA0002.jpg" alt="" />
                    <p>Legend2</p>
                </div>
                <div>
                    <img src="src/assets/picture/IMG-20240108-WA0003.jpg" alt="" />
                    <p>Legend3</p>
                </div>
            </Carousel>
        </div>
    )
};

export default Products
