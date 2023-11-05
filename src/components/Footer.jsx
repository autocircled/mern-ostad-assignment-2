import '../assets/css/footer.css';

function Footer() {
    return (
        <footer className="footer mt-auto py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="copyright">
                            &copy; {new Date().getFullYear()} Moktadir Rahman. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="social-links">
                            <a href="https://www.facebook.com" target="_blank" className='no-underline' rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.twitter.com" target="_blank" className='no-underline' rel="noopener noreferrer">Twitter</a>
                            <a href="https://www.linkedin.com" target="_blank" className='no-underline' rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://www.instagram.com" target="_blank" className='no-underline' rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
