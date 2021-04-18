import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="text-center container mt-5">


      <div class="card">
        <h5 class="card-header"> Want to be an admin ?</h5>
        <div class="card-body">
       
          <h5 class="card-title"> Then Email me at : <span className="text-secondary">junaidmiaa@gmail.com</span></h5>
         
          <p className="text-danger">* note: Please write details why you want to be an admin otherwise request will be rejected</p>
      

          <Link to="/">
            <a href="..." class="btn btn-primary">Go to Home</a>
          </Link>

        </div>
      </div>
    </div>
    );
};

export default Contact;