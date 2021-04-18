import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from '../ReviewCard/ReviewCard';
import spiner1 from './35b25ac379b8e771bbd3fd956f4d31bb.gif'

const Review = () => {


    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://glacial-refuge-82912.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 2,
        initialSlide: 0,
        className: "slides",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="mb-5 ">

            <div className="text-center rounded pt-1 ">
                <h2> Reviews From Our Client </h2>
            </div>

            <div className="row">
                {
                    review.length === 0 &&
                    <div className="text-center">
                        <img src={spiner1} style={{ width: '50%' }} alt="" />
                    </div>
                }

                <Slider {...settings}>


                    {
                        review.map(reviewInfo => <ReviewCard reviewInfo={reviewInfo}> </ReviewCard>)
                    }

                </Slider>

            </div>

        </section>
    );
};

export default Review;