import projectImage1 from '../assets/images/p1.jpg';
import projectImage2 from '../assets/images/p2.jpg';
import projectImage3 from '../assets/images/p3.jpg';

function Carousel() {
    const projectCarouselImages = [
        {
            image: projectImage1, // Replace with your project image URL
            title: 'Project 1',
        },
        {
            image: projectImage2, // Replace with your project image URL
            title: 'Project 2',
        },
        {
            image: projectImage3, // Replace with your project image URL
            title: 'Project 3',
        },
        // Add more project images here
    ];

    return (
        <section className="carousel py-5">
            <div className="container">
                <h2 className="text-center">Featured Projects</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        {/* Add your carousel or slideshow component here */}
                        <div id="projectCarousel" className="carousel slide">
                            <div className="carousel-inner">
                                {projectCarouselImages.map((project, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={project.image} className="d-block w-100" alt={project.title} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;
