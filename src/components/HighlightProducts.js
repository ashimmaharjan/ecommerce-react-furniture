import ChairImage from '../images/chair-2.png'
import DeskImage from '../images/tv-desk.png'

const HighlightProducts = () => {
    return (
        <section className="mt-10 w-[85%] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="col-span-1 h-64 bg-[#F4F5F7] shadow-sm flex relative overflow-hidden">
                    <div className="absolute w-1/2 h-full top-8">
                        <img src={ChairImage} className='w-[80%] h-full -ml-2 object-contain' alt="highlight-chair-img" />
                    </div>

                    {/* spacing div */}
                    <div className="w-2/6 h-full"></div>

                    <div className="w-4/6 h-full pr-10 pl-5 pt-10 z-50">
                        <h6 className="text-3xl text-gray-800 uppercase tracking-wider"> Comfortable <b>Chair</b></h6>
                        <p className="text-gray-500 text-sm tracking-wide"> Doomed as former time of very might vows trial Roal, its clarinet expect. </p>

                        <div className="mt-8">
                            <a href="" className="border-b border-gray-600 py-1 uppercase text-gray-600"> View Now </a>
                        </div>
                    </div>

                </div>

                <div className="col-span-1 h-64 bg-[#F4F5F7] shadow-sm flex relative overflow-hidden">
                    <div className="absolute w-1/2 h-full top-8 right-0">
                        <img src={DeskImage} className='w-full h-full -ml-10 -mt-14 object-cover' alt="highlight-chair-img" />
                    </div>

                    <div className="w-4/6 h-full pl-10 pt-10 z-50">
                        <h6 className="text-3xl text-gray-800 uppercase tracking-wider"> Luxurious New <b>Desk</b></h6>
                        <p className="text-gray-500 text-sm tracking-wide"> Doomed as former time of very might vows trial Roal, its clarinet expect. </p>

                        <div className="mt-8">
                            <a href="" className="border-b border-gray-600 py-1 uppercase text-gray-600"> View Now </a>
                        </div>
                    </div>

                    {/* spacing div */}
                    <div className="w-2/6 h-full"></div>

                </div>

            </div>
        </section>
    );
}

export default HighlightProducts;