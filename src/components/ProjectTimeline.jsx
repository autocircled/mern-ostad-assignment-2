function ProjectTimeline() {
    return (
        <section className="project-timeline py-5">
            <div className="container">
                <h2 className="text-center mb-4">Project Timeline</h2>
                <div className="timeline">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="timeline-entry">
                                <div className="timeline-date">
                                    <h3>Q1 2022</h3>
                                </div>
                                <div className="timeline-content">
                                    <h4>Project Kickoff</h4>
                                    <p>The project officially started with initial planning and client meetings.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="timeline-entry">
                                <div className="timeline-date">
                                    <h3>Q3 2022</h3>
                                </div>
                                <div className="timeline-content">
                                    <h4>Development Phase</h4>
                                    <p>Development work for the project commenced with a focus on core features.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="timeline-entry">
                                <div className="timeline-date">
                                    <h3>Q4 2022</h3>
                                </div>
                                <div className="timeline-content">
                                    <h4>Testing and QA</h4>
                                    <p>Extensive testing and quality assurance was performed to ensure a bug-free project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="timeline-entry">
                                <div className="timeline-date">
                                    <h3>Q1 2023</h3>
                                </div>
                                <div className="timeline-content">
                                    <h4>Project Delivery</h4>
                                    <p>The project was successfully delivered to the client, meeting all requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectTimeline;
