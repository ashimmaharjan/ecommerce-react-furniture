import { BsDot } from 'react-icons/bs'

const TopBar = () => {
    return (
        <section>
            <div className="w-full px-2 md:px-0 md:w-3/4 flex items-center text-xs md:text-sm lg:text-base py-5 justify-between mx-auto text-gray-500">
                <ul className="inline-flex space-x-1 items-center">
                    <li><a href="tel:+977 9865412314">+977 9865412314</a></li>
                    <li><BsDot /></li>
                    <li><a href="mailto:shop@gmail.com">shop@gmail.com</a></li>
                </ul>

                <ul className="inline-flex space-x-1 items-center">
                    <li><a href="">Account</a></li>
                    <li><BsDot /></li>
                    <li><a href="">Wishlist</a></li>
                    <li><BsDot /></li>
                    <li><a href="">Blog</a></li>
                    <li><BsDot /></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </section>
    );
}

export default TopBar;