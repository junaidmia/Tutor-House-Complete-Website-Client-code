import React from 'react';
import FacilityDataCard from '../FacilityDataCard/FacilityDataCard';
import offline from './offline.png'

import online from './online-lesson.png'
import quickRes from './quick-response.png'
import emergency from './24-hour-service.png'
import fast from './clock.png'
import secure from './shield.png'
import teacher from './qualify.png'
import budget from './reduce-cost.png'

const facilityData = [
    {
        title: 'Fast',
        img: fast
    },
    {
        title: 'Secure',
        img: secure
    },
    {
        title: 'Qualified Teacher',
        img: teacher
    },
    {
        title: 'Emergency Support',
        img: emergency
    },
    {
        title: 'Online Support',
        img: online
    },
    {
        title: 'Offline Support',
        img: offline

    },
    {
        title: 'Low cost',
        img: budget
    },
    {
        title: 'Quick Response',
        img: quickRes
    }
]


const OurFacility = () => {
    return (
        <section style={{ backgroundColor: "#f5f5f5" }}>
            <div className="text-center">
                <h3> Our <br /> <span className="text-danger" > Core Features </span>  </h3>
            </div>
            <div>
                <div className="row p-3">

                    {
                        facilityData.map(info => <FacilityDataCard facilityInfo={info} > </FacilityDataCard>)
                    }

                </div>
            </div>
        </section>
    );
};

export default OurFacility;