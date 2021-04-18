import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import img1 from './8600.jpg'

const MessageUs = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = data => {
        alert('success')
        console.log(data)
    }
    return (
        <section className="mt-5">
            <div className="row" >

                <div className="col-md-6 ">

                    <img style={{ width: '100%' }} src={img1} alt="" className="img-fluid" />

                </div>

                <div className="col-md-6 shadow-lg p-3 mb-5 bg-body rounded">

                    <div className="text-danger p-3">
                        <h1> Drop your Question here &#128512; </h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div>

                            <div class="mb-3  ">
                                <label for="exampleFormControlInput1" class="form-label">Your Name</label>

                                <input name="name" class="form-control" placeholder="Your Name" defaultValue={loggedInUser.name} ref={register}></input>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Occupation</label>
                                <input required name="occupation" class="form-control" placeholder="Your Occupation" defaultValue="" ref={register} />
                            </div>

                        </div>

                        <div >
                            <div class="mb-3">

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your Message</label>

                                    <input required name="message" class="form-control " placeholder=" Write Your Message" defaultValue="" ref={register} />

                                </div>

                            </div>

                            <div className="">
                                <input type="submit" class="btn btn-warning mb-5" />

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MessageUs;