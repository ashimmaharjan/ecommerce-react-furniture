const CategorizedProducts = ({ title, products }) => {
    return (
        <section>
            <div className="col-span-1">
                <div className="py-2 border-b">
                    <h6 className="text-lg font-semibold text-gray-700 uppercase tracking-wide">{title}</h6>
                </div>
                {/* Products */}
                {products.map((product) => (
                    <div key={product.id} className="grid grid-cols-6 gap-3 mt-5 cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out" >
                        <div className="col-span-2 h-[90px] bg-[#F5F5F5] flex justify-center items-center">
                            <img src={product.image} className="w-16 h-16 object-scale-down" alt="" />
                        </div>

                        <div className="col-span-4 pt-1">
                            <h6 className="text-sm text-gray-500 tracking-wide">{product.name}</h6>
                            <b className="text-gray-700 text-base">${product.price}</b>
                        </div>
                    </div>
                ))}

            </div>
        </section >
    );
}

export default CategorizedProducts;