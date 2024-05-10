import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className="text-center space-y-2 mt-10">
            <h3 className="text-2xl text-center text-orange-500 font-bold">Services</h3>
            <h1 className="text-4xl text-center">Our Services Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>

    );
};

export default Services;