import HeroSlider from "../components/HeroSlider";
import HighlightProducts from "../components/HighlightProducts";
import NavigationBar from "../components/Navbar";
import OurProducts from "../components/OurProducts";
import TopBar from "../components/TopBar";

const Home = () => {
    return (
        <section>
            <TopBar />
            <NavigationBar />
            <HeroSlider />
            <HighlightProducts />

            <div className="products-section w-[70%] mx-auto">
                <OurProducts />
            </div>
        </section>
    );
}

export default Home;