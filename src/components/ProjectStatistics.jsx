function ProjectStatistics() {
    return (
        <section className="project-statistics py-5">
            <div className="container">
                <h2 className="text-center mb-4">Project Statistics</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="statistic-box text-center p-4 rounded bg-light">
                            <h3>100+</h3>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="statistic-box text-center p-4 rounded bg-light">
                            <h3>95%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="statistic-box text-center p-4 rounded bg-light">
                            <h3>20+</h3>
                            <p>Awards Received</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectStatistics;
