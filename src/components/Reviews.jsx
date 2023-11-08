import google from '../assets/images/google.png'
import upcity from '../assets/images/upcity.png'
import clutch from '../assets/images/clutch.png'

export default function Reviews() {
    return (
        <section className="reviews py-5" style={{ backgroundColor: '#556c26' }}>
            <div className="container text-center text-warning lead">
                <div className="row">
                    <div className="col-md-4 mt-3 mt-md-0">
                        <div className="review">
                            <img src={google} alt="Logo 1" />
                            <div className="rating mt-2">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className="rating-counts">
                                <p>100+ REVIEWS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <div className="review">
                            <img src={upcity} alt="Logo 1" />
                            <div className="rating mt-2">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className="rating-counts">
                                <p>50+ REVIEWS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <div className="review">
                            <img src={clutch} alt="Logo 1" />
                            <div className="rating mt-2">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className="rating-counts">
                                <p>50+ REVIEWS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
