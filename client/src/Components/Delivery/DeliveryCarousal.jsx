import React from 'react';
import Slider from "react-slick";

// components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../CarousalArrow';

const DeliveryCarousal = () => {
const categories = [
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9_UenJ4ReoT7F7mPV7wqvj1hdJ-xj0VHkQ&usqp=CAU",
    title: "pizza",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9_UenJ4ReoT7F7mPV7wqvj1hdJ-xj0VHkQ&usqp=CAU",
        title: "pizza",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9_UenJ4ReoT7F7mPV7wqvj1hdJ-xj0VHkQ&usqp=CAU",
        title: "pizza",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9_UenJ4ReoT7F7mPV7wqvj1hdJ-xj0VHkQ&usqp=CAU",
        title: "pizza",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9_UenJ4ReoT7F7mPV7wqvj1hdJ-xj0VHkQ&usqp=CAU",
        title: "pizza",
    }
];

const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:1,
    NextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
};

    return (
        <>
            <h1 className="text-xl mb-4 font-semibold">
                Inspiration for your first order
            </h1>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
                {
                    categories.map((food)=> {
                        <DeliveryCategory {...food} />
                    })
                }
            </div>

            <div className="hidden lg:block ">
                <Slider {...settings} >
                {
                    categories.map((food)=> {
                        <DeliveryCategory {...food} />
                    })
                }
                </Slider>
            </div>
        </>
    );
};

export default DeliveryCarousal;
