import React from 'react'
import men1 from '../assets/images/men1.jpg'
import men2 from '../assets/images/men2.jpg'
import '../assets/css/testimonials.css'

export default function Testimonials() {
    const testimonials = [
        {
            text: "I was amazed by the quality of work and attention to detail. Highly recommended!",
            author: "John Doe",
            image: men1, // Replace with the actual image URL
        },
        {
            text: "Exceptional service. They delivered on time and exceeded our expectations.",
            author: "Jane Smith",
            image: men2, // Replace with the actual image URL
        },
    ];

    return (
        <>
            <section className="section testimonials">
                <h2>Client Testimonials</h2>
                <div className="testimonials-container">
                    {testimonials.map(({ text, author, image }, index) => (
                        <div key={index.toString()} className="testimonial">
                            <div className="testimonial-content">
                                <p className="testimonial-text">{text}</p>
                                <div className="testimonial-author">
                                    <img src={image} alt={`${author}'s Photo`} className="author-image" />
                                    <p className="author-name">{author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
