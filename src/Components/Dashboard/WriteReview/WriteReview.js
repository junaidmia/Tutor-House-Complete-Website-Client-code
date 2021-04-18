import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const WriteReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        alert('success')

        const reviewData = {
            name: data.name,
            workPlace: data.workPlace,
            review: data.review,
            img: loggedInUser.photoURL
        };


        const url = `https://glacial-refuge-82912.herokuapp.com/addReview`

        console.log(data)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side responded', res))
    };
    return (
        <section >
            <Navbar></Navbar>

            <div className="container-fluid row mt-3">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 ">
                    <div className="text-center text-primary">
                        <h3> Write a Review </h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div>

                            <div class="mb-3  ">
                                <label for="exampleFormControlInput1" class="form-label">Your Name</label>

                                <input name="name" class="form-control" placeholder="Your Name" defaultValue={loggedInUser.name} ref={register}></input>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Occupation</label>
                                <input required name="workPlace" class="form-control" placeholder="Your Occupation" defaultValue="" ref={register} />
                            </div>

                        </div>

                        <div >
                            <div class="mb-3">

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Write Your Review</label>

                                    <input required name="review" class="form-control " placeholder="Description" defaultValue="" ref={register} />

                                </div>

                            </div  >

                            <div className="text-center">
                                <input type="submit" class="btn btn-primary mb-5" />

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default WriteReview;