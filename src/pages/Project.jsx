import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCards from '../components/ProjectCards';
import Carousel from '../components/Carousel';
import AwardsAndRecognitions from '../components/AwardsAndRecognitions';
import ProjectStatistics from '../components/ProjectStatistics';
import ProjectTimeline from '../components/ProjectTimeline';

export default function Project() {
    return (
        <>
            <Header />
            <ProjectCards />
            <Carousel />
            <ProjectTimeline />
            <AwardsAndRecognitions />
            <ProjectStatistics />
            <Footer />
        </>
    )
}
