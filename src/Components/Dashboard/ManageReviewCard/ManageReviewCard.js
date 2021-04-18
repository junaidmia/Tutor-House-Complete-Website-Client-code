import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import star from './reviewStar.png'

const ManageReviewCard = (props) => {
    const { name, workPlace, review, img, _id } = props.reviewInfo



    const deleteReview = (id, event) => {

        console.log(_id)
        fetch(`https://glacial-refuge-82912.herokuapp.com/deleteReview/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
                if (result) {
                    alert('deleted successfully')
                }
            })

    }
    return (
        <div className="col-md-4">
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

                    <div className="text-center">
                        <button class="btn btn-danger" onClick={() => deleteReview(_id)}><FontAwesomeIcon icon={faTrash} /> delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReviewCard;