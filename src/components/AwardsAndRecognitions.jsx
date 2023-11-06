// AwardsAndRecognitions.js
import React from 'react';

function AwardsAndRecognitions() {
    const awardsData = [
        {
            title: 'Best IT Company of the Year',
            year: '2022',
            description: 'Awarded for outstanding contributions in IT services and solutions.',
        },
        {
            title: 'ISO 9001 Certification',
            year: '2021',
            description: 'Achieved ISO 9001 quality management system certification.',
        },
        {
            title: 'Tech Innovation Award',
            year: '2020',
            description: 'Recognized for innovative technology solutions in the industry.',
        },
        // Add more award entries here
    ];

    return (
        <section className="awards-and-recognitions py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Awards and Recognitions</h2>
                <div className="row">
                    {awardsData.map((award, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="award-entry p-3 mb-4 bg-white rounded">
                                <h3 className="mb-2">{award.title}</h3>
                                <p className="year mb-2"><strong>Year:</strong> {award.year}</p>
                                <p className="mb-0">{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AwardsAndRecognitions;
