import Header from './components/Header.js';
import Footer from './components/Footer';
import OurServices from './components/OurServices.js';
import AboutUs from './components/AboutUs.js';
import SeoSearch from './components/SeoSearch.js';
import PricingPlan from './components/PricingPlan.js';
import SeoBanner from './components/SeoBanner.js';
import Blog from './components/Blog.js';
import OurServicesDetailedSection from './components/OurServicesDetailedSection.js';

function App() {
    return (
        <div>
            <div className="back-to-top"></div>

            <Header />

            <OurServices />
            <AboutUs />
            <OurServicesDetailedSection />
            <SeoSearch />
            <PricingPlan />
            <SeoBanner />
            <Blog />

            <Footer />
        </div >
    )
}

export default App;
