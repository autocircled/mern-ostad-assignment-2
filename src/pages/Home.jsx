import { Header, Hero, Service, Project, Testimonials, Footer, Navigation } from '../components'

function Home() {

    return (
        <>
            <Navigation />
            <div className='container'>
                <div className="row">
                    <Header />
                    <Hero />
                    <Service />
                    <Project />
                    <Testimonials />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
