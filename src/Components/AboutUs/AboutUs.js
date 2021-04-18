import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="text-center container mt-5">


      <div class="card">
        <h5 class="card-header">Author Junaid</h5>
        <div class="card-body">
          <h5 class="card-title"> Email me at : <span style={{ color: 'red' }}>junaidmiaa@gmail.com</span></h5>
      

          <Link to="/">
            <a href="..." class="btn btn-primary">Go to Home</a>
          </Link>

        </div>
      </div>
    </div>
    );
};

export default AboutUs;