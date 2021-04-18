import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import './ServiceCardList.css'

const ServiceCardList = (props) => {
  const { name, teacherName, price, duration, imgUrl, classLevel, _id } = props.info
  return (
    <div className="col-md-3 p-3  ">

      <Link to={`/dashboard/${_id}`} style={{ textDecoration: 'none' }} >



        <div style={{ height: '100%' }} className="card inner">
          <div className="text-center" >
            <img style={{ width: '100%' }} src={imgUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card-body text-success">
            <div className="text-center pb-3 ">
              <h4 className="card-title">{name}</h4>
            </div>

            <h6 className="card-title"> Tutor: {teacherName} </h6>
            <h4 className="card-title">{price} BDT/month </h4>
          </div>
          <div className="card-footer  text-secondary">

            <div className=" row justify-content-between">

              <div className="col-auto align-items-center">
                <span> <FontAwesomeIcon icon={faClock} /> {duration} hour </span>
              </div>

              <div className="col-auto align-items-center">
                <span> <FontAwesomeIcon icon={faUserGraduate} /> Class: {classLevel}</span>
              </div>

            </div>

          </div>
        </div>
      </Link>
    </div>

  );
};

export default ServiceCardList;