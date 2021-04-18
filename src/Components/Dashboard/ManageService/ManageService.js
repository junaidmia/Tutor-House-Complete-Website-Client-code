import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://glacial-refuge-82912.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setService(data))
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

            { isAdmin && <div className="container-fluid row mt-3">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 ">

                    <div className="text-center text-danger">
                        <h3> Manage Services</h3>
                    </div>

                    <div className="row">
                        {
                            service.map(info => <ManageServiceCard info={info}></ManageServiceCard>)
                        }
                    </div>



                </div>

            </div>}

        </section>
    );
};

export default ManageService;