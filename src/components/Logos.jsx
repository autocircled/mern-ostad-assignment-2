import awardImage from '../assets/images/awardimage2020.jpg'
import '../assets/css/logos.css'

export default function Logos() {
    return (
        <section className="logos text-bg-transparent py-5">
            <div className="container text-center ">
                <h2 className="mb-4">Award-winning <strong>digital marketing agency</strong></h2>
                <p>Thrive is a WordPress web design and SEO company with proven results.</p>
                <p><a href="#" className="btn btn-link">Read More +</a></p>
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo">
                            <img src={awardImage} alt="Logo 1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
