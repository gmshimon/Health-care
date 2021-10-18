import React, {useEffect, useState} from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-center">This is services</h1>
            <div className="container">
                <div className="row g-2">
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