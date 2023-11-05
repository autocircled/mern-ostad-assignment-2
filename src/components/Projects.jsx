import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';

function Projects() {
    // Sample project data (you can replace this with your own project information)
    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur elit.',
            imageUrl: p1, // Replace with your project image URL
        },
        {
            title: 'Project 2',
            description: 'Sed tristique leo ac metus volutpat, nec suscipit.',
            imageUrl: p2, // Replace with your project image URL
        },
        {
            title: 'Project 3',
            description: 'Curabitur viverra vel justo in euismod.',
            imageUrl: p3, // Replace with your project image URL
        },
    ];

    return (
        <section className="projects mt-auto py-5">
            <div className="container">
                <h2 className="text-center mb-4">Our Projects</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <img src={project.imageUrl} alt={project.title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
