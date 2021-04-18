import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const [imgUrl, setImgURL] = useState(null)

    const onSubmit = data => {
        alert('success')

        const serviceData = {
            name: data.name,
            teacherName: data.teacherName,
            price: data.price,
            classLevel: data.class,
            duration: data.duration,
            imgUrl: imgUrl
        };


        const url = `https://glacial-refuge-82912.herokuapp.com/addService`

        console.log(serviceData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side responded', res))
    };


    const handleImgUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'dc930df6fc4eed5143b06babc2fbf048')

        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });          
    }


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [isAdmin,setIsAdmin]= useState(false)


    useEffect(()=>{
            fetch('https://glacial-refuge-82912.herokuapp.com/isAdmin',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({email: loggedInUser.email})
            })
            
                .then(res => res.json())
                .then(data => setIsAdmin(data));


    },[])

    return (
        <section >
            <Navbar></Navbar>

           { isAdmin &&<div className="container-fluid row mt-3">

                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-8 ">
                    <div className="text-center pb-3 text-success">
                        <h3> Add a new Service</h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='row'>
                            <div className="col-md-6">
                                <div >

                                    <div class="mb-3  ">
                                        <label for="exampleFormControlInput1" class="form-label">Service Name</label>

                                        <input required name="name" class="form-control" placeholder="Service Name" defaultValue="" ref={register}></input>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Teacher's Name</label>
                                        <input required name="teacherName" class="form-control" placeholder="Teacher's Name" defaultValue="" ref={register} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Price</label>

                                        <input required name="price" class="form-control" placeholder="Price" defaultValue="" ref={register} />
                                    </div>

                                </div>

                            </div>


                            <div className="col-md-6">
                                <div >
                                    <div class="mb-3">

                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label"> Duration</label>

                                            <input required name="duration" class="form-control" placeholder="Duration" defaultValue="" ref={register} />
                                        </div>


                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label"> Class</label>

                                            <input required  name="class" class="form-control" placeholder="Class" defaultValue="" ref={register} />
                                        </div>


                                        <label for="formFile" class="form-label"><FontAwesomeIcon icon={faCloudUploadAlt} />Upload Image</label>

                                        <input  required name="exampleRequired" class="form-control" type="file" onChange={handleImgUpload} />
                                        <span className="text-danger">*Please wait some second for uploading the image perfectly</span>

                                    </div  >

                                    <div className="text-center">
                                        <input type="submit" class="btn btn-primary mb-5" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>}
        </section>
    );
};

export default AddService;