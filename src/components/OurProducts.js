import ProductImage1 from "../images/circle-table.png"
import ProductImage2 from "../images/couch-gbfd5b77e3_1920.png"
import ProductImage3 from "../images/office-desk-g3c375b7d2_1920.png"
import ProductImage4 from "../images/wooden-rocking-chair-g93c85892c_1920.png"
import ProductImage5 from "../images/work-table-gd6098e3cb_1920.png"
import ProductImage6 from "../images/table-gbb86a042b_1920.png"
import ProductImage7 from "../images/antique-g8992bfd9e_1920.png"
import ProductImage8 from "../images/armchair-g2b1628233_1920.png"

import { RiHeart3Line } from 'react-icons/ri'
import { BiGitCompare } from 'react-icons/bi'

const OurProducts = () => {
    const tabLinksClass = "pb-1 hover:border-b border-gray-600";
    const absoluteButtons = "w-full h-full flex items-center justify-center";
    const OurProducts = [
        { id: 1, name: "Buckle Wrap Wooden Table", price: "52.00", image: ProductImage1 },
        { id: 1, name: "Couch", price: "42.00", image: ProductImage2 },
        { id: 1, name: "Office Desk", price: "32.00", image: ProductImage3 },
        { id: 1, name: "Wooden Rocking Chair", price: "22.00", image: ProductImage4 },
        { id: 1, name: "Work Table", price: "12.00", image: ProductImage5 },
        { id: 1, name: "Table", price: "22.00", image: ProductImage6 },
        { id: 1, name: "Antique", price: "32.00", image: ProductImage7 },
        { id: 1, name: "Armchair", price: "42.00", image: ProductImage8 },
    ]


    return (
        <section className="mt-20 pb-10">
            {/* Navigation Tabs */}
            <div className="flex items-center justify-between">
                <ul className="inline-flex items-center space-x-8 uppercase tracking-wide text-gray-700">
                    <li><a href="" className={tabLinksClass}>Furniture</a></li>
                    <li><a href="" className={tabLinksClass}>Lighting</a></li>
                    <li><a href="" className={tabLinksClass}>Sofas</a></li>
                    <li><a href="" className={tabLinksClass}>Louge Chairs</a></li>
                    <li><a href="" className={tabLinksClass}>All</a></li>
                </ul>

                <div className="flex items-center space-x-3 text-sm">
                    <a href="" className="py-1 uppercase text-gray-800"> Back </a>
                    <div className="w-[2px] h-4 bg-gray-800">
                    </div>
                    <a href="" className="py-1 uppercase text-[#6D82B5]"> Next </a>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                {OurProducts.map((product) => (
                    <div className="col-span-1" key={product.id}>
                        {/* Product Image */}
                        <div className="w-full h-72 bg-[#F5F5F5] flex items-center justify-center relative group transition ease-linear duration-1000">
                            <img src={product.image} className="w-44 h-44 object-scale-down" alt="" />

                            {/* Add to card buttons */}
                            <div className="absolute hidden bottom-0 left-[9px] 
                                            group-hover:flex w-11/12 divide-x-2 h-11
                                          bg-white border-b-[3px] border-b-[#7BD4BB]">
                                <div className="w-1/5 h-full">
                                    <button className={absoluteButtons}>
                                        <RiHeart3Line />
                                    </button>
                                </div>
                                <div className="w-3/5 h-full">
                                    <button className={absoluteButtons}>
                                        <span className="uppercase text-sm mt-1 tracking-wider text-gray-600">Add to cart</span>
                                    </button>
                                </div>
                                <div className="w-1/5 h-full">
                                    <button className={absoluteButtons}>
                                        <BiGitCompare />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Quick Details */}
                        <div className="mt-3 space-y-2">
                            <p className="text-sm text-gray-500 tracking-wide">{product.name}</p>
                            <span className="font-semibold text-gray-700">${product.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center mt-12">
                <div className="w-5/12 bg-gray-400 h-[1px]"></div>
                <div className="w-2/12 flex justify-center">
                    <button className="border border-gray-700 py-2 px-3 uppercase text-sm hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out"> Go to Shop </button>
                </div>
                <div className="w-5/12 bg-gray-400 h-[1px]"></div>
            </div>
        </section>
    );
}

export default OurProducts;