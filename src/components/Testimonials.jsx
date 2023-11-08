import men1 from '../assets/images/men1.jpg';
import men2 from '../assets/images/men2.jpg';
import '../assets/css/testimonials.css';

const Testimonials = () => {
    // const { text, author, image } = testimonial;
    const testimonial = [
        {
            text: "Thrive is a much needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.",
            title: "They do everything they say…no BS",
            author: "John Doe",
            position: "Practice Manager – PARC Urology",
            image: men1,
        },
        {
            text: "These guys are incredible. They’ve helped us to grow our business and now the biggest problem we seem to come across is having too much business – which is the ideal problem to have. We are right where we wanted to be and Thrive made that possible. Thanks guys!",
            title: "Great Service",
            author: "John Doe",
            position: "Practice Manager – PARC Urology",
            image: men2,
        },
        {
            text: "These guys are incredible. They’ve helped us to grow our business and now the biggest problem we seem to come across is having too much business – which is the ideal problem to have. We are right where we wanted to be and Thrive made that possible. Thanks guys!",
            title: "Great Service",
            author: "John Doe",
            position: "Practice Manager – PARC Urology",
            image: men2,
        },
    ];
    // const { text, author, image } = testimonial;

    return (
        <section className="testimonials text-bg-light py-5">
            <div className="container text-center ">
                <h2 className="mb-4">What Our <strong>Clients Are Saying</strong></h2>
                <div className="row">
                    {testimonial.map(({ text, author, title, position, image }, index) => (

                        <div key={index} className="col-md-4">
                            <div className="testimonial p-3 rounded">
                                <div className='pb-4'>
                                    <img src={image} alt={`${author}'s Photo`} className="img-fluid rounded-circle" />
                                </div>
                                <div>
                                    <h4 className="author-name fw-bold">{author}</h4>
                                    <p className="author-position">{position}</p>
                                </div>
                                <p className="author-title fw-bold fs-5 text-bg-warning">{title}</p>
                                <p className="testimonial-text mt-3">{text}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
