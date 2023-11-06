const FAQAccordion = () => {
    const faqData = [
        {
            "question": "What is Lorem Ipsum?",
            "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            "question": "Why do we use it?",
            "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            "question": "How can I contact support?",
            "answer": "You can contact our support team by email at support@example.com or by phone at +1 (123) 456-7890."
        },
        {
            "question": "What are your business hours?",
            "answer": "Our business hours are Monday to Friday from 9:00 AM to 5:00 PM and Saturday from 10:00 AM to 3:00 PM. We are closed on Sundays."
        }
    ]

    return (
        <section className="accordion-section mt-auto py-5">
            <div className="container">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <div className="accordion" id="faqaccordion">
                    {faqData.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <button className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded={index === 0 ? true : false} aria-controls={`collapse-${index}`}>
                                    {faq.question}
                                </button>
                            </h2>
                            <div id={`collapse-${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqaccordion">
                                <div className="accordion-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
