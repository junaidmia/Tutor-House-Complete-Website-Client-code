import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const BookTutor = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [bookingData, setBookingData] = useState(null)


    const onSubmit = data => {

        setBookingData(data)


    }
    const handlePaymentSuccess = (paymentId, paymentMethod) => {
        const bookingTutorData = {
            name: bookingData.name,
            email: bookingData.email,
            paymentId,
            paymentMethod,
            tutor: 'Emergency',
            subject: bookingData.subject,
            status: 'pending',
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


                <div style={{ display: bookingData ? 'none' : 'block' }} className="col-md-3 ">  <div className="text-center">
                    <h5> Book a Emergency Tutor</h5>
                </div>


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
                                <input required name="subject" class="form-control" placeholder="Subject" defaultValue='' ref={register} />
                            </div>
                            {/* <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Price</label>
                            <input  name="price" class="form-control " placeholder="Price" defaultValue='' ref={register} />
                        </div> */}

                        </div>

                        <div >
                            <div className="text-center">
                                <input type="submit" class="btn btn-danger mb-5" />

                            </div>
                        </div>
                    </form>

                </div>


                <div style={{ display: bookingData ? 'block' : 'none', backgroundColor: '#e6f5ff' }} className="col-md-3 p-5 text-center rounded ">

                    <h5 className="mb-4">Stripe Payment</h5>

                    <ProcessPayment handlePayment={handlePaymentSuccess}> </ProcessPayment>

                </div>

            </div>
        </section>
    );
};

export default BookTutor;