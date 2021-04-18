import React from 'react';

const BookingListCard = (props) => {
  const { name, email, price, subject, status, img, tutor } = props.bookingInfo

  
  return (
    <div className="col-md- p-2">

      <div class="card">
        <h5 class="card-header">Subject: <span className="text-danger">{subject}</span>  </h5>
        <div class="card-body row">
          <div className="col-md-9">

            <h6 class="card-title"> Tutor: {tutor} </h6>

            <p class="card-text">Price: {price} BDT/month</p>
          </div>

          <div style={{ backgroundColor: "#ffe6e6" }} className="col-md-2 rounded-pill text-center pt-2">

            <h4>{status}</h4>

          </div>

        </div>
      </div>


    </div>
  );
};

export default BookingListCard;