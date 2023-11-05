import project1 from '../assets/images/p1.jpg'
import project2 from '../assets/images/p2.jpg'
import project3 from '../assets/images/p3.jpg'
export default function Project() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description for Project 1',
            imageUrl: project1,
        },
        {
            title: 'Project 2',
            description: 'Description for Project 2',
            imageUrl: project2,
        },
        {
            title: 'Project 3',
            description: 'Description for Project 3',
            imageUrl: project3,
        },
    ];
    return (
        <>
            {projects.length > 0 ? (
                <section className="section projects">
                    <div className="center">
                        <h2>Our Projects</h2>
                        <div className="project-container">
                            {projects.map((project, index) => (
                                <div className="project" key={index}>
                                    <img src={project.imageUrl} alt={project.title} />
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : ""}
        </>
    )
}
