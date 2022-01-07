import Slider from "react-slick";
import Lamp1 from "../images/lamp-1.png"
import Lamp2 from "../images/lamp-2.png"
import Lamp3 from "../images/lamp-3.png"

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const SliderImages = [
        { photo: Lamp1 },
        { photo: Lamp2 },
        { photo: Lamp3 },
    ]

    return (
        <section className="relative">
            <div className="w-[85%] bg-gradient-to-br from-zinc-300 to-zinc-200 mx-auto -mt-14">
                <Slider {...settings}>
                    {SliderImages.map((sliderImage) => (
                        <div key={sliderImage.photo} className="w-[85%] bg-[#D2E9E3] mx-auto -mt-14">
                            <div className="w-full h-[500px] flex">
                                <div className="w-1/2 h-full pl-10 md:pl-28 pt-28">
                                    <h6 className="text-2xl md:text-4xl text-gray-800"><b>Shopnik.</b> Number #1 Trusted <br />  Furniture Website.
                                    </h6>

                                    <p className="mt-5 text-[#EFB948]"> coming soon in your door with a huge discount </p>


                                    <div className="mt-12">
                                        <a href="" className="border-b border-[#6D82B5] py-1 uppercase text-[#6D82B5]"> View Now </a>
                                    </div>

                                    <div className="mt-28 flex items-center space-x-3">
                                        <a href="" className="py-1 uppercase text-gray-800"> Back </a>
                                        <div className="w-[2px] h-4 bg-gray-800">
                                        </div>
                                        <a href="" className="py-1 uppercase text-[#6D82B5]"> Next </a>
                                    </div>
                                </div>
                                <div className="w-1/2 h-full">
                                    <img src={sliderImage.photo} className="object-contain w-full h-full"></img>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default HeroSlider;