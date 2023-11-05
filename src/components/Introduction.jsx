import myPhoto from "../assets/images/me.jpg"

const PersonalIntroduction = () => {
    return (
        <div className="personal-introduction container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">

                    <div className="text-center">
                        <h2>About Me</h2>
                        <p>
                            Hello, I&apos;m [Your Name]. I&apos;m a passionate MERN developer with a love for creating
                            innovative and user-friendly web applications. I believe in the power of technology
                            to solve real-world problems and make people&apos;s lives easier.
                        </p>
                    </div>


                </div>
                <div className="col-md-6">
                    <img src={myPhoto} alt="Your Photo" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>My Journey</h3>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <p>Started my journey in web development</p>
                            <p>Year 20XX</p>
                        </li>
                        <li className="list-group-item">
                            <p>Graduated with a degree in Computer Science</p>
                            <p>Year 20XX</p>
                        </li>
                        <li className="list-group-item">
                            <p>Joined [Your Previous Company] as a Junior Developer</p>
                            <p>Year 20XX</p>
                        </li>
                        {/* Add more milestones or events as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PersonalIntroduction;
