import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let { serviceId } = useParams();


    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://glacial-refuge-82912.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const serviceDetails = service.find(product => product._id == serviceId);
    // console.log(serviceDetails)
    const { name, price, imgUrl, teacherName } = serviceDetails || {}




    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [bookingData, setBookingData] = useState(null)


    const onSubmit = data => {

        setBookingData(data)

    }

    const handlePaymentSuccess = (paymentId, paymentMethod) => {

        const bookingTutorData = {
            name: bookingData.name,
            email: bookingData.email,
            price: price,
            paymentId,
            paymentMethod,
            subject: bookingData.subject,
            tutor: teacherName,
            status: 'Pending',
            img: imgUrl
        };

        const url = `https://glacial-refuge-82912.herokuapp.com/bookingTutorData`

        // console.log(data)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingTutorData)
        })
            .then(res => console.log('server side responded', res))
        console.log(bookingTutorData)


    }
    return (
        <section>
            <Navbar></Navbar>

            <div className="container-fluid row mt-3">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-2">
                    <div class="card">
                        <img style={{ width: '100%' }} src={imgUrl} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">Tutor : {teacherName} </p>
                            <p class="card-text">{price} BDT/month</p>

                        </div>
                    </div>
                </div>
                <div style={{ display: bookingData ? 'none' : 'block' }} className="col-md-3  ">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div>

                            <div class="mb-3  ">
                                <label for="exampleFormControlInput1" class="form-label">Your Name</label>

                                <input name="name" class="form-control" placeholder="Your Name" defaultValue={loggedInUser.name} ref={register}></input>
                            </div>
                            <div class="mb-3  ">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>

                                <input name="email" class="form-control" placeholder="Your Email" defaultValue={loggedInUser.email} ref={register}></input>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Subject</label>
                                <input required name="subject" class="form-control" placeholder="Subject" defaultValue={name} ref={register} />
                            </div>
                      

                        </div>

                        <div >


                            <div className="text-center">
                                <input type="submit" class="btn btn-danger mb-5" />

                            </div>

                        </div>
                    </form>
                </div>


                <div style={{ display: bookingData ? 'block' : 'none' }} className="col-md-3 text-center ">

                    <h5>Stripe Payment</h5>

                    <ProcessPayment handlePayment={handlePaymentSuccess}> </ProcessPayment>
                </div>

            </div>
        </section>
    );
};

export default Dashboard;