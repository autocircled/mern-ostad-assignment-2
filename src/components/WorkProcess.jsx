function WorkProcess() {

    const workProcessData = [
        {
            "step": 1,
            "title": "Initial Consultation",
            "description": "We start by understanding your requirements and objectives through an initial consultation. This helps us tailor our services to your specific needs."
        },
        {
            "step": 2,
            "title": "Planning and Strategy",
            "description": "Our team develops a detailed plan and strategy for your project. This includes defining goals, timelines, and resources required for successful execution."
        },
        {
            "step": 3,
            "title": "Design and Development",
            "description": "The design and development phase begins. Our experts work on creating visually appealing designs and implementing technical solutions to bring your project to life."
        },
        {
            "step": 4,
            "title": "Testing and Quality Assurance",
            "description": "Before launching, we rigorously test the project to ensure functionality, performance, and security. Quality assurance is a top priority."
        },
        {
            "step": 5,
            "title": "Client Review",
            "description": "We value your input. You get the opportunity to review the project at different stages and provide feedback for any necessary adjustments."
        },
        {
            "step": 6,
            "title": "Project Delivery",
            "description": "After successful testing and client approval, we deliver the final project. Our team ensures a smooth transition and provides support if needed."
        }
    ]
    return (
        <section className="work-process bg-info-subtle mt-auto py-5">
            <div className="container">
                <h2 className="text-center">Our Work Process</h2>
                <div className="row">
                    {workProcessData.map((step) => (
                        <div key={step.step} className="col-md-4">
                            <div className="step">
                                <h3>Step {step.step}</h3>
                                <h5 className="fw-bold">{step.title}</h5>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkProcess;
