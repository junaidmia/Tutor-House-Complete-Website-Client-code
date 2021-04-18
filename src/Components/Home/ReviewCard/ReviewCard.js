import React from 'react';
import star from './reviewStar.png'


const ReviewCard = (props) => {

  const { name, workPlace, review, img } = props.reviewInfo

  return (
    <div className="p-5 ">

      <div className="card text-center  ">

        <div className=" d-flex justify-content-center " >

          <img style={{ width: '30%' }} src={img} className=" card-img-top" alt="..." />

        </div>

        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title ">{name}</h5>
            <p className="card-title">{workPlace} </p>
          </div>

          <div style={{
            width: ' 100%',
            height: ' 110px',
            overflow: 'auto'
          }}>
            <p className="p-1">{review}</p>
          </div>
        </div>

        <div className="card-footer ">
          <img style={{ width: '60%' }} src={star} alt="" />
        </div>

      </div>
    </div>
  );
};

export default ReviewCard;