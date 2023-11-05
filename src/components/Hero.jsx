import '../assets/css/hero.css';

function Hero() {
    return (
        <section className="hero d-flex justify-content-center align-items-center">
            <div className="hero-overlay z-1"></div>
            <div className="container text-center text-white py-5 z-2">
                <h1>Welcome to My Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique leo ac metus volutpat.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </section>
    );
}

export default Hero;
