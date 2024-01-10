import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Diapo {
    id: number;
    nom: string;
    imageUrl: string;
    description: string
}

interface CarouselProps {
    diapo: Diapo[];
}

const Slide: React.FC<CarouselProps> = ({ diapo }) => {
    return (
        <Carousel>
            {
                diapo.map((slide) => (
                    <div key={slide.id}>
                        <img src={slide.imageUrl} alt={slide.nom} />
                        <p>{slide.description}</p>
                    </div>
                ))
            }
        </Carousel>
    )
}

export default Slide