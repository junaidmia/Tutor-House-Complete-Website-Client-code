import React, { useEffect, useState } from 'react';
import ServiceCardList from '../ServiceCardList/ServiceCardList';
import './ServiceCard.css'
import spiner1 from './35b25ac379b8e771bbd3fd956f4d31bb.gif'


const ServiceCard = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://glacial-refuge-82912.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <section className="mt-5 ">


            <div className="text-center rounded pt-1 mb-5 ">
                <h2 className="text-danger animation"> Our Quick Services </h2>
            </div>


            <div className="row">

                {
                    service.length === 0 &&
                    <div className="text-center">
                        <img src={spiner1} style={{ width: '50%' }} alt="" />
                    </div>
                }

                {
                    service.map(info => <ServiceCardList info={info} ></ServiceCardList>)
                }
            </div>

        </section>
    );
};

export default ServiceCard;