// Team.js
import React from 'react';

function Team() {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Web Developer',
            gadgets: ['Desktop', 'Camera', 'Headphones'],
            imageUrl: '/john-doe.jpg', // Replace with the image URL of John Doe
        },
        {
            name: 'Jane Smith',
            role: 'Graphic Designer',
            gadgets: ['Laptop', 'Drawing Tablet', 'Digital Camera'],
            imageUrl: '/jane-smith.jpg', // Replace with the image URL of Jane Smith
        },
        {
            name: 'Jack Smith',
            role: 'Animator',
            gadgets: ['Desktop', 'Drawing Tablet', 'Smartphone'],
            imageUrl: '/jane-smith.jpg', // Replace with the image URL of Jane Smith
        },
        // Add more team members with their details
    ];

    return (
        <section className="team bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-4">My Team</h2>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-md-4 mt-3 mt-md-0">
                            <div className="card">
                                {/* <img src={member.imageUrl} alt={member.name} className="card-img-top" /> */}
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{member.name}</h5>
                                    <p className="card-text">{member.role}</p>
                                    <ul className="list-unstyled">
                                        {member.gadgets.map((gadget, i) => (
                                            <li key={i}>{gadget}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
