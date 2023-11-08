import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import BlogPosts from '../components/Blog';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Testimonials />
            <Projects />
            <BlogPosts />
            <Footer />
        </>
    )
}
