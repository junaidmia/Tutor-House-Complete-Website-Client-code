import { faList, faListOl, faPen, faPlus, faPlusCircle, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [isAdmin, setIsAdmin] = useState(false)


    useEffect(() => {
        fetch('https://glacial-refuge-82912.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (

        <div style={{ backgroundColor: '#e6e6e6' }} className=" text-center mt-3 rounded p-1">

            <div className="m-3 ">
                <Link to="/bookTutor">
                    <button type="button" style={{ width: '80%' }} class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title=" Book your Tutor">
                        <FontAwesomeIcon icon={faPlus} />   Book a Tutor
                    </button>

                </Link>
            </div>



            <div className=" m-3">
                <Link to="/booking">
                    <button type="button" style={{ width: '80%' }} class="btn  btn-secondary " data-bs-toggle="tooltip" data-bs-placement="top" title="  Booking list">
                        <FontAwesomeIcon icon={faList} />   Your Booking list
                     </button>
                </Link>
            </div>



            <div className="m-3 ">
                <Link to="/review">
                    <button type="button" style={{ width: '80%' }} class="btn  btn-secondary " data-bs-toggle="tooltip" data-bs-placement="top" title="Review">
                        <FontAwesomeIcon icon={faPen} />    Write a Review
                      </button>
                </Link>
            </div>


            { isAdmin && <div>
                <div className=" m-3">
                    <Link to="/bookedTutorList">
                        <button type="button" style={{ width: '80%' }} class="btn  btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                            <FontAwesomeIcon icon={faListOl} />  Booked Tutor List
                   </button>
                    </Link>
                </div>



                <div className="m-3 ">
                    <Link to="/addService">
                        <button type="button" style={{ width: '80%' }} class="btn  btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Add service">
                            <FontAwesomeIcon icon={faPlusCircle} />   Add service
                       </button>
                    </Link>
                </div>

                <div className=" m-3">
                    <Link to="/makeAdmin">
                        <button type="button" style={{ width: '80%' }} class="btn  btn-secondary " data-bs-toggle="tooltip" data-bs-placement="top" title="Add service">
                            <FontAwesomeIcon icon={faUserPlus} />  Make Admin
                     </button>
                    </Link>
                </div>


                <div className=" m-3">
                    <Link to="/manageService">
                        <button type="button" style={{ width: '80%' }} class="btn  btn-secondary " data-bs-toggle="tooltip" data-bs-placement="top" title="Add service">
                            <FontAwesomeIcon icon={faTasks} />   Manage Service
                     </button>
                    </Link>
                </div>


                <div className=" m-3">
                    <Link to="/manageReview">
                        <button type="button" style={{ width: '80%' }} class="btn  btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Add service">
                            <FontAwesomeIcon icon={faTasks} />   Manage Review
                     </button>
                    </Link>
                </div>

            </div>}
        </div>
    );
};

export default Sidebar;