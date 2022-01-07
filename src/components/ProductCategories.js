import CategorizedProducts from "./CategorizedProducts";

import ProductImage1 from "../images/circle-table.png"
import ProductImage2 from "../images/couch-gbfd5b77e3_1920.png"
import ProductImage3 from "../images/office-desk-g3c375b7d2_1920.png"
import ProductImage4 from "../images/wooden-rocking-chair-g93c85892c_1920.png"
import ProductImage5 from "../images/work-table-gd6098e3cb_1920.png"
import ProductImage6 from "../images/table-gbb86a042b_1920.png"
import ProductImage7 from "../images/antique-g8992bfd9e_1920.png"
import ProductImage8 from "../images/armchair-g2b1628233_1920.png"
import ProductImage9 from "../images/circle-table.png"

const ProductCategories = () => {
    const bestSellerProducts = [
        { id: 1, name: "Buckle Wrap Wooden Table", price: "52.00", image: ProductImage1 },
        { id: 2, name: "Couch", price: "42.00", image: ProductImage2 },
        { id: 3, name: "Office Desk", price: "32.00", image: ProductImage3 },
    ]

    const newArrivalProducts = [
        { id: 4, name: "Wooden Rocking Chair", price: "22.00", image: ProductImage4 },
        { id: 5, name: "Work Table", price: "12.00", image: ProductImage5 },
        { id: 6, name: "Table", price: "22.00", image: ProductImage6 },
    ]

    const featuredProducts = [
        { id: 7, name: "Antique", price: "32.00", image: ProductImage7 },
        { id: 8, name: "Armchair", price: "42.00", image: ProductImage8 },
        { id: 9, name: "Circle Table", price: "42.00", image: ProductImage9 },
    ]
    return (
        <section className="mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <CategorizedProducts title='Bestseller' products={bestSellerProducts} />
                <CategorizedProducts title='New Arrivals' products={newArrivalProducts} />
                <CategorizedProducts title='Featured' products={featuredProducts} />
            </div>
        </section>
    );
}

export default ProductCategories;