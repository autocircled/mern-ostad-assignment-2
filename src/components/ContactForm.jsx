// ContactForm.js
import { useEffect, useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add code to handle form submission, e.g., sending data to a server
        setSubmitted(true);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSubmitted(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [submitted]);

    return (
        <div className="container">
            <h2 className="text-center mb-4">Send Us A Message</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                {submitted ? ( // Display success message when submitted is true
                    <span className="alert alert-success mb-3 ms-3">Form submitted successfully!</span>
                ) : null}
            </form>
        </div>
    );
}

export default ContactForm;
