import React from 'react';
import LoadData from '../../LoadData/LoadData';
import Service from './Service';

const Services = () => {
    const [services] = LoadData();
    return (
        <div>
            <h1 className="text-center">This is services</h1>
            <div className="container">
                <div className="row g-5">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;