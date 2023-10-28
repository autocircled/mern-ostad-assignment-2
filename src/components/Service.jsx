export default function Service() {
    const services = [
        {
            title: 'Web Design',
            description: 'Beautiful and responsive web design to make your brand stand out.',
        },
        {
            title: 'App Development',
            description: 'Custom mobile and web application development for your business needs.',
        },
        {
            title: 'SEO Optimization',
            description: 'Enhance your online presence with our SEO optimization services.',
        },
    ];
    return (
        <>
            <section id="services" className="services">
                <div className="center">
                    <h2>Our Services</h2>
                    <div className="service-container">
                        {services.map((service, index) => (
                            <div className="service" key={index}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
