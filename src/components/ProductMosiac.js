import FoldingTable from '../images/folding-chair.png'
import Chair from '../images/brown-g4dd36389b_1920-removebg-preview.png'
import Woodenbox from '../images/wood-box.png'
import Couch from "../images/couch-gbfd5b77e3_1920.png"
import TallChair from "../images/chair-g21dd51152_1920.png"

const ProductMosiac = () => {
    return (
        <section className="w-[85%] mx-auto mt-20 pb-24">
            <div className="grid grid-cols-8 gap-5">
                <div className="col-span-8 lg:col-span-6 h-auto">
                    <div className="grid grid-cols-6 gap-5">
                        {/* New Arrivals */}
                        <div className="col-span-6 md:col-span-3 lg:col-span-4 h-72 pt-12 bg-[#F9D9DA] relative overflow-hidden">
                            <div className="w-1/2 h-full absolute top-16 left-0">
                                <img src={FoldingTable} className='w-full h-full object-scale-down' alt="" />
                            </div>
                            <div className="w-1/2 ml-auto h-full">
                                <h2 className="uppercase text-gray-500">#New Arrivals</h2>
                                <h2 className="capitalize text-gray-700 font-semibold text-2xl mt-2 tracking-wider">Suitable Wood Tool</h2>
                                <div className="mt-5">
                                    <a href="" className="text-sm border-b border-gray-600 py-1 uppercase text-gray-600"> Shop Now </a>
                                </div>
                            </div>
                        </div>

                        {/* Featured */}
                        <div className="col-span-6 md:col-span-3 lg:col-span-2 h-72 bg-[#DAF3ED] relative overflow-hidden pt-12">
                            <div className="w-3/4 h-full">
                                <img src={Chair} className='w-60 h-60 object-scale-down -ml-5 mt-5' alt="" />
                            </div>
                            <div className="w-1/2 mr-4 absolute z-30 right-0 top-12">
                                <h2 className="uppercase text-gray-500">#Featured</h2>
                                <h2 className="capitalize text-gray-700 font-semibold text-2xl mt-2 tracking-wider"> Wood Chair</h2>
                                <div className="mt-5">
                                    <a href="" className="text-sm border-b border-gray-600 py-1 uppercase text-gray-600"> Shop Now </a>
                                </div>
                            </div>
                        </div>

                        {/* Most Popular */}
                        <div className="col-span-6 md:col-span-3 lg:col-span-2 h-72 pt-12 bg-[#E2F0DF] relative overflow-hidden">
                            <div className="w-full h-full pt-20 -ml-5">
                                <img src={Woodenbox} className='w-full h-40 mt-5 -ml-5 object-scale-down' alt="" />
                            </div>
                            <div className="w-1/2 ml-auto h-full absolute right-0 top-12 mr-4">
                                <h2 className="uppercase text-gray-500">#New Arrivals</h2>
                                <h2 className="capitalize text-gray-700 font-semibold text-2xl mt-2 tracking-wider">Wood Box</h2>
                                <div className="mt-5">
                                    <a href="" className="text-sm border-b border-gray-600 py-1 uppercase text-gray-600"> Shop Now </a>
                                </div>
                            </div>
                        </div>

                        {/* Hot Collection */}
                        <div className="col-span-6 md:col-span-3 lg:col-span-4 h-72 bg-[#D8DBEC] relative overflow-hidden pt-12">
                            <div className="w-3/4 h-full">
                                <img src={Couch} className='w-60 h-60 object-scale-down mt-5 ml-5' alt="" />
                            </div>
                            <div className="w-1/2 mr-4 absolute z-30 right-0 top-12">
                                <h2 className="uppercase text-gray-500">#Hot Collection</h2>
                                <h2 className="capitalize text-gray-700 font-semibold text-2xl mt-2 tracking-wider">Wood Leather Couch</h2>
                                <div className="mt-5">
                                    <a href="" className="text-sm border-b border-gray-600 py-1 uppercase text-gray-600"> Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trending Now */}
                <div className="col-span-8 lg:col-span-2 h-auto bg-[#FFEDCD] relative overflow-hidden">
                    <img src={TallChair} className='w-full h-52 lg:h-full object-contain mt-24' alt="" />
                    <div className="w-4/5 pl-5 absolute z-30 left-0 top-12">
                        <h2 className="uppercase text-gray-500">#Hot Collection</h2>
                        <h2 className="capitalize text-gray-700 font-semibold text-2xl mt-2 tracking-wider">Wood Leather Couch</h2>
                        <div className="mt-5">
                            <a href="" className="text-sm border-b border-gray-600 py-1 uppercase text-gray-600"> Shop Now </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductMosiac;