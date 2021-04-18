import React from 'react';
import Slider from "react-slick";
import './Teacher.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeachersCard from '../TeachersCard/TeachersCard';



const teachersInfo = [
  {
    name: 'Junaid',
    institution: 'BUET',
    subject: 'Math',
    img: 'https://p7.hiclipart.com/preview/410/666/469/chibiusa-anime-male-deviantart-anime-boy.jpg'


  },
  {
    name: 'rahim',
    institution: 'Dhaka Univercity',
    subject: 'English',
    img: 'https://image.freepik.com/free-vector/people-happy-face-man-with-glasses-icon_24640-19265.jpg'

  },
  {
    name: 'Karim',
    institution: 'NSU',
    subject: 'Physics',
    img: 'https://image.freepik.com/free-vector/people-happy-face-man-icon_24640-19289.jpg'

  },
  {
    name: 'Sakib',
    institution: 'CUET',
    subject: 'BIOLOGY',
    img: 'https://image.freepik.com/free-vector/people-happy-face-man-with-glasses-icon_24640-19224.jpg'
  },
  {
    name: 'Rafiq',
    institution: 'CUET',
    subject: 'BIOLOGY',
    img: 'https://image.freepik.com/free-vector/people-happy-face-man-with-glasses-icon_24640-19223.jpg'
  },
  {
    name: 'Abul hasan',
    institution: 'CUET',
    subject: 'BIOLOGY',
    img: 'https://image.freepik.com/free-vector/people-happy-face-man-with-glasses-icon_24640-19266.jpg'
  }
]

const TeachersCarousel = () => {

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
    <section style={{ backgroundColor: 'rgb(251, 251, 251)' }} className="mb-5 mt-5">

      <div>
        <h1 className="text-center pb-"> Our Hounarable Teachers </h1>
      </div>

      <div className="row">
        <Slider {...settings}>

          {
            teachersInfo.map(info => <TeachersCard teachersInfo={info}></TeachersCard>)
          }

        </Slider>
      </div>


    </section>
  );
};

export default TeachersCarousel;