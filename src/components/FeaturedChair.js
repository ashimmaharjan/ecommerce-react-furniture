import ChairImage from '../images/wooden-rocking-chair-g93c85892c_1920.png'

const FeaturedChair = () => {
    return (
        <section>
            <div className="w-[85%] h-48 mx-auto bg-[#F4F5F7] mt-28">
                <div className="w-[80%] h-full mx-auto flex items-center">
                    <div className="w-1/2">
                        <h6 className="text-3xl text-gray-800 uppercase tracking-wider"><b>Wooden</b> Rocking Chair</h6>
                        <div className="mt-8">
                            <a href="" className="text-sm border-b border-gray-600 py-1 uppercase text-gray-600"> View Now </a>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <img src={ChairImage} className="w-full h-72 -mt-24 object-scale-down ml-28" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedChair;