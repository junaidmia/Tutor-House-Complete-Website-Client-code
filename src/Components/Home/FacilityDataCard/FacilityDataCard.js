import React from 'react';

const FacilityDataCard = (props) => {
    const { title ,img} = props.facilityInfo
    return (
        <div className=" col-md-3 p-3 pt-2 ">
            <div class="card">
                <div className="text-center pt-2">
                    <img style={{ width: '25%' }} src={img} class="card-img-top" alt="..." />

                </div>

                <div class="card-body text-center ">
                    <h5>{title}</h5>

                </div>
            </div>
        </div>
    );
};

export default FacilityDataCard;