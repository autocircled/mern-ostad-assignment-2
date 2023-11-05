import { Header, Footer, Navigation, PersonalIntroduction, AboutMe, Skills, Values } from '../components'

export default function About() {
    return (
        <>
            <Navigation />
            <div className='container'>
                <div className="row">
                    <Header />
                    <PersonalIntroduction />
                    {/* <AboutMe /> */}
                    <Skills />
                    <Values />
                </div>
            </div>
            <Footer />
        </>
    )
}
