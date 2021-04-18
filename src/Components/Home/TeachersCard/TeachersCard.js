import React from 'react';

const TeachersCard = (props) => {

    const { name, institution, subject, img } = props.teachersInfo
    return (
        <div>
            <div className="p-5 rounded">
                <div class="card ">
                    <img style={{ width: '100%' }} src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{institution}</p>
                        <h6> {subject}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachersCard;