import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import BookingListCard from '../BookingListCard/BookingListCard';
import Sidebar from '../Sidebar/Sidebar';
import spiner1 from './35b25ac379b8e771bbd3fd956f4d31bb.gif'


const BookingList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [bookedTutor, setBookedTutor] = useState([])

    useEffect(() => {
        fetch('https://glacial-refuge-82912.herokuapp.com/tutorBookedData?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookedTutor(data))
    }, [])

    return (
        <section >
            <Navbar></Navbar>

            <div className="container-fluid row mt-3">
                <div className="col-md-3 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 ">
                    <div>
                        <h3 className="text-danger text-center">Your Booking List:</h3>
                    </div>
                    <div className="text-center">
                        <h3 className="text-success"> {loggedInUser.name}, Your have booked total <span className="text-danger"> {bookedTutor.length} </span> Tutor</h3>
                    </div>

                    <div className="row">

                        {
                            bookedTutor.length === 0 &&
                            <div className="text-center">
                                <img src={spiner1} style={{ width: '50%' }} alt="" />
                            </div>
                        }


                        {
                            bookedTutor.map(info => <BookingListCard bookingInfo={info}></BookingListCard>)
                        }

                    </div>

                </div>

            </div>
        </section>

    );
};

export default BookingList;