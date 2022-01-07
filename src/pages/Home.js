import FeaturedChair from "../components/FeaturedChair";
import HeroSlider from "../components/HeroSlider";
import HighlightProducts from "../components/HighlightProducts";
import NavigationBar from "../components/Navbar";
import OurProducts from "../components/OurProducts";
import ProductCategories from "../components/ProductCategories";
import ProductMosiac from "../components/ProductMosiac";
import TopBar from "../components/TopBar";

const Home = () => {
    return (
        <section>
            <TopBar />
            <NavigationBar />
            <HeroSlider />
            <HighlightProducts />

            <div className="products-section w-[80%] md:w-[70%] mx-auto">
                <OurProducts />
            </div>

            <FeaturedChair />

            <div className="products-section w-[70%] mx-auto">
                <ProductCategories />
            </div>

            <ProductMosiac />

        </section>
    );
}

export default Home;