function Services() {
    return (
        <section className="services mt-auto py-5">
            <div className="container">
                <h2 className="text-center mb-4">Our Services</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service">
                            {/* <i className="fas fa-cogs"></i> */}
                            <h5>Web Design and Development</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            {/* <i className="fas fa-wrench"></i> */}
                            <h5>Graphic Design</h5>
                            <p>Sed tristique leo ac metus volutpat, nec fringilla quam suscipit.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            {/* <i className="fas fa-certificate"></i> */}
                            <h5>Server Management</h5>
                            <p>Curabitur viverra vel justo in euismod.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
