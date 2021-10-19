import React from 'react';
import LoadData from '../../LoadData/LoadData';
import './contact.css'
const Contact = () => {
    const [services] = LoadData();
    console.log(services)
    return (
        <div>
            {
                services.map(service =>
                    <div className="contact">
                        <h1>{service.serviceName}</h1>
                        <h4>{service.instructor}</h4>
                        <h5>{service.email}</h5>
                    </div>)
            }
        </div >
    );
};

export default Contact;