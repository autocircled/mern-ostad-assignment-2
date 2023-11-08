import '../assets/css/hero.css';

function Hero() {
    return (
        <section className="hero d-flex justify-content-center align-items-center">
            <div className="hero-overlay z-1"></div>
            <div className="container text-center text-white py-5 z-2">
                <h1 className="display-1 fw-bold">RESULTS DRIVEN</h1>
                <p className="lead">One Stop Solution for all your IT Needs</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </section>
    );
}

export default Hero;
