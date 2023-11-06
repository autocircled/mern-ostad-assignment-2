import projectImage1 from '../assets/images/p1.jpg';
import projectImage2 from '../assets/images/p2.jpg';
import projectImage3 from '../assets/images/p3.jpg';

function ProjectCards() {
    const data = [
        {
            image: projectImage1, // Replace with your project image URL
            title: 'Project 1',
            description: 'Description of project 1 goes here.',
        },
        {
            image: projectImage2, // Replace with your project image URL
            title: 'Project 2',
            description: 'Description of project 2 goes here.',
        },
        {
            image: projectImage3, // Replace with your project image URL
            title: 'Project 3',
            description: 'Description of project 3 goes here.',
        },
        // Add more project cards here
    ];

    return (
        <section className="project-cards mt-auto py-5">
            <div className="container">
                <h2 className="text-center mb-4">Portfolio</h2>
                <div className="row">
                    {data.map((project, index) => (
                        <div key={index} className="col-md-4 mt-3 mt-md-0">
                            <div className="card">
                                <img src={project.image} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectCards;
