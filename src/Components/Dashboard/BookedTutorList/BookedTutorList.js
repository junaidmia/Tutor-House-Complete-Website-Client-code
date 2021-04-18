import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import BookedTutorListCard from '../BookedTutorListCard/BookedTutorListCard';
import Sidebar from '../Sidebar/Sidebar';
import spiner1 from './35b25ac379b8e771bbd3fd956f4d31bb.gif'


const BookedTutorList = () => {


    const [bookedTutor, setBookedTutor] = useState([])

    useEffect(() => {
        fetch('https://glacial-refuge-82912.herokuapp.com/totalTutorBookedData')
            .then(res => res.json())
            .then(data => setBookedTutor(data))
    }, [])

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
        <section >
            <Navbar></Navbar>

            { isAdmin && <div className="container-fluid row mt-3 ">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <div className="mb-3 text-center text-warning">
                        <h3>Total tutor Booking List</h3>
                    </div>
                    <div className="text-center">
                        <h3>Total : <span className="text-danger"> {bookedTutor.length} </span> Tutor booked</h3>
                    </div>

                    <div className="ro">
                        <table style={{ backgroundColor: 'rgb(230, 230, 230)' }} class="table mb-3 rounded">

                            <tbody>
                                <tr>

                                    <td>
                                        <div style={{ width: '80px' }} className=" text-primary">
                                            Name
                                        </div>
                                    </td>

                                    <td>
                                        <div style={{ width: '150px' }} className="text-center  text-primary">
                                            Email
                                       </div>
                                    </td>

                                    <td>
                                        <div style={{ width: '70px' }} className="text-center ms-5 text-primary">
                                            Price
                                         </div>
                                    </td>

                                    <td>
                                        <div style={{ width: '70px' }} className=" text-primary">
                                            Method
                                         </div>
                                    </td>

                                    <td>
                                        <div style={{ width: '80px' }} className=" text-primary">
                                            Subject
                                       </div>
                                    </td>

                                    <td>
                                        <div style={{ width: '80px' }} className=" text-primary">
                                            Tutor
                                        </div>
                                    </td>

                                    <td>
                                        <div style={{ width: '80px' }} className=" text-primary">
                                            Status
                                        </div>
                                    </td>

                                    <td>
                                        <div style={{ width: '80px' }} className="text-center text-primary">
                                            Manage
                                       </div>
                                    </td>

                                    <td>
                                        <div style={{ width: '80px' }} className="text-center  text-primary">

                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>

                        {
                            bookedTutor.length === 0 &&
                            <div className="text-center">
                                <img src={spiner1} style={{ width: '50%' }} alt="" />
                            </div>
                        }

                        {
                            bookedTutor.map(info => <BookedTutorListCard bookingInfo={info}></BookedTutorListCard>)
                        }

                    </div>
                </div>
            </div>}
        </section>
    );
};

export default BookedTutorList;