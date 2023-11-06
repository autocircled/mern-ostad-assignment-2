function Skills() {
    // Sample skills data (you can replace this with your own skillset)
    const skills = [
        { name: 'Web Development', progress: '80%' },
        { name: 'JavaScript', progress: '70%' },
        { name: 'React', progress: '85%' },
        { name: 'HTML/CSS', progress: '90%' },
        { name: 'Backend Development', progress: '65%' },
        { name: 'Node.js', progress: '60%' },
        { name: 'Database Design', progress: '85%' },
        { name: 'UI/UX Design', progress: '70%' },
        { name: 'Graphic Design', progress: '90%' },
        { name: 'Project Management', progress: '95%' },
    ];

    return (
        SkillsWithProgress({ skills })
    );
}

function SkillsWithProgress({ skills }) {
    return (
        <section className="skills bg-dark mt-auto py-5">
            <div className="container">
                <h2 className="text-center text-light">Skills</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <ul className="list-group">
                            {skills.map((skill, index) => (
                                <li key={index} className="list-group-item">
                                    <div className="skill">
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: skill.progress }}
                                                aria-valuenow={skill.progress}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// export default SkillsWithProgress;


export default Skills;
