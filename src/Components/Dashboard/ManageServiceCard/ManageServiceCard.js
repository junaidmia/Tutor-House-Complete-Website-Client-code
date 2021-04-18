import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageServiceCard = (props) => {
    const { name, teacherName, price, imgUrl, classLevel, _id } = props.info


    const deleteService = (id, event) => {
        console.log(_id)
        fetch(`https://glacial-refuge-82912.herokuapp.com/deleteService/${id}`, {
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

            <div class="card mt-5">
                <div>
                    <img style={{ width: '50%' }} src={imgUrl} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">

                    <div className="row">
                        <div className="col-md-6">
                            <h3>{name}</h3>
                            <p class="card-text"> Tutor{teacherName}</p>
                            <p class="card-text"> Price: {price}</p>
                            <p class="card-text"> Class{classLevel}</p>
                        </div>
                        <div className="col-md-6">

                            <div className="text-center mt-5">
                                <button class="btn btn-danger" onClick={() => deleteService(_id)}><FontAwesomeIcon icon={faTrash} /> delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServiceCard;