function Services() {
    const data = [
        {
            "title": "Web Development",
            "description": "Our web development team creates responsive and user-friendly websites tailored to your unique needs. We offer custom web application development, e-commerce solutions, and much more to help your business succeed in the digital world."
        },
        {
            "title": "Graphic Design",
            "description": "Our graphic design experts bring your vision to life with creative and captivating designs. From logo and branding design to print and digital media design, our team ensures that your visual identity stands out and makes a lasting impression."
        },
        {
            "title": "Digital Marketing",
            "description": "We provide digital marketing solutions to help your business reach a wider audience and increase online visibility. Our services include search engine optimization (SEO), social media marketing, pay-per-click advertising, and email marketing campaigns."
        },
        {
            "title": "Mobile App Development",
            "description": "Our mobile app development team specializes in creating high-quality, cross-platform mobile applications. We develop apps for both iOS and Android platforms, ensuring a seamless user experience and functionality."
        },
        {
            "title": "Content Writing",
            "description": "Quality content is the key to engaging your audience. Our content writers deliver well-researched and compelling content that resonates with your target audience. We offer blog posts, articles, website content, and more."
        },
        {
            "title": "IT Consulting",
            "description": "Our IT consulting services help businesses optimize their technology infrastructure. Whether it's network architecture, cybersecurity, or software recommendations, we provide expert guidance to enhance your IT operations."
        }
    ]
    return (
        <section className="services bg-primary-subtle mt-auto py-5">
            <div className="container">
                <h2 className="text-center mb-4">Our Services</h2>
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index} className="col-md-4 mb-5">
                            <div className="service text-center">
                                <h5 className="fw-bold">{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
