import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';


import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();



    const onSubmit = data => {
        alert('Admin added successfully')

        const adminData = {
            email: data.name,
        };

        const url = `https://glacial-refuge-82912.herokuapp.com/addAdmin`

        console.log(adminData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server side responded', res))
    };


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
            { isAdmin && <div className="container-fluid row mt-3">

                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-8 ">
                    <div className="text-center text-danger">
                        <h3> Add a new Admin</h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='row'>
                            <div className="col-md-6">
                                <div >
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email</label>

                                        <input required type="email" name="name" class="form-control" placeholder="email" defaultValue="" ref={register}></input>
                                    </div>
                                </div>
                            </div>


                            <div >
                                <div>
                                    <input type="submit" class="btn btn-info mb-5" />

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>}
        </section>
    );
};

export default MakeAdmin;