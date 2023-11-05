import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import BlogPosts from '../components/Blog';
import Footer from '../components/Footer';
export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Projects />
            <BlogPosts />
            <Footer />
        </>
    )
}
