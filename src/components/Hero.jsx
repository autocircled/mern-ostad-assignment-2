import hero_image from '../assets/images/hero.jpg'
export default function Hero() {

    return (
        <>
            <div className="hero" style={{ backgroundImage: `url(${hero_image})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content center">
                    <h2>Discover the Magic</h2>
                    <p>Explore a world of endless possibilities.</p>
                    <a className="btn btn-light" href="#about">Learn More</a>
                </div>
            </div>
        </>
    )
}
