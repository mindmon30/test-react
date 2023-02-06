import Header from '../component/first/Header'
import Top from '../component/first/Top'
import Bottom from '../component/first/Bottom'
import Footer from '../component/first/Footer'
import Carousel from '../component/first/Carousel'

function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <Bottom />
            <Top />
            <Bottom />
            <Footer />
        </div>
    );
}

export default Home;