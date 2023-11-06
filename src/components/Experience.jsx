function Experience() {
    // Sample experience data (you can replace this with your own work experience)
    const experience = [
        {
            jobTitle: 'Front-End Developer',
            company: 'ABC Company',
            date: 'January 2020 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            jobTitle: 'UI/UX Designer',
            company: 'XYZ Design Studio',
            date: 'June 2018 - December 2019',
            description: 'Sed tristique leo ac metus volutpat, nec fringilla quam suscipit.',
        },
        {
            jobTitle: 'Software Engineer',
            company: 'Tech Innovators',
            date: 'May 2017 - May 2018',
            description: 'Vestibulum sit amet quam vel elit varius aliquam at id lacus.',
        },
        {
            jobTitle: 'Product Manager',
            company: 'InnovateTech Solutions',
            date: 'August 2015 - April 2017',
            description: 'Fusce non justo non justo rhoncus fermentum vel sit amet justo.',
        },
    ];

    return (
        <section className="experience bg-body-secondary mt-auto py-5">
            <div className="container">
                <h2 className="text-center">Work Experience</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        {experience.map((job, index) => (
                            <div key={index} className="experience-item">
                                <h5 className="fw-bold">{job.jobTitle}</h5>
                                <p>{job.company}</p>
                                <p className="job-date">{job.date}</p>
                                <p>{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
