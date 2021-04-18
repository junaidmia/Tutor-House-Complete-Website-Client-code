import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ManageReviewCard from '../ManageReviewCard/ManageReviewCard';
import Sidebar from '../Sidebar/Sidebar';

const ManageReview = () => {


    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://glacial-refuge-82912.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section>
            <Navbar></Navbar>

            <div className="container-fluid row mt-3">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>


                <div className="col-md-8">
                    <div className="text-center text-warning">
                        <h3>Manage Review</h3>
                    </div>

                    <div className="row">

                        {
                            review.map(reviewInfo => <ManageReviewCard reviewInfo={reviewInfo}> </ManageReviewCard>)
                        }
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ManageReview;