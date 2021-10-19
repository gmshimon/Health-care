import {useEffect, useState} from 'react';

const LoadData = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/services.json')
            .then(result => result.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])
    return [services, loading];
};

export default LoadData;