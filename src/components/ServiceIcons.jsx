// ServiceIcons.js
import React from 'react';

function ServiceIcons() {
    const serviceIcons = [
        {
            iconClass: 'bi bi-code-slash',
            title: 'Web Development',
        },
        {
            iconClass: 'bi bi-palette',
            title: 'Graphic Design',
        },
        {
            iconClass: 'bi bi-hdd-rack',
            title: 'Server Management',
        },
        // Add more service icons here
    ];

    return (
        <section className="service-icons bg-dark text-light mt-auto py-5">
            <div className="container">
                <h2 className="text-center">Services with Icon</h2>
                <div className="row">
                    {serviceIcons.map((icon, index) => (
                        <div key={index} className="col-md-4">
                            <div className="icon text-center">
                                <i className={icon.iconClass} style={{ fontSize: '100px' }}></i>
                                <h3>{icon.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceIcons;
