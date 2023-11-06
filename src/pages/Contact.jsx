import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import BusinessHours from '../components/BusinessHours';
import OfficeLocations from '../components/OfficeLocations';
import FAQAccordion from '../components/FAQAccordion';

export default function Contact() {
    return (
        <>
            <Header />
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-8">
                        <ContactForm />
                        <FAQAccordion />
                    </div>
                    <div className="col-md-4">
                        <OfficeLocations />
                        <BusinessHours />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
