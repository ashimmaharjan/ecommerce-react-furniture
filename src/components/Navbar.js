import { FiMenu, FiSearch } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'
import { useState } from 'react';

const NavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    let menu;
    let menuMask;

    if (showMenu) {
        menu = <div className='fixed bg-white text-black top-0 left-0 w-4/5 h-full z-50'>
            <div className='flex justify-between items-center px-5 py-3 shadow border-b'>
                <h2 className='text-2xl font-semibold'>Menu</h2>
                <RiCloseLine className='w-8 h-8' onClick={() => setShowMenu(false)} />
            </div>

            <div className='px-5 py-3 text-xl'>
                <ul className='space-y-2'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">News</a></li>
                </ul>
            </div>
        </div>

        menuMask = <div
            onClick={() => setShowMenu(false)}
            className='fixed bg-gray-800 opacity-60 p-5 text-black top-0 left-0 w-full h-full z-50'>

        </div>
    }
    return (
        <nav className="w-full h-36 bg-gray-100 pt-6">
            <div className="w-3/4 mx-auto flex items-center justify-between">
                <h2 className="text-4xl font-bold leading-8"><a href="">Shopnik.</a></h2>
                <div className='hidden md:flex justify-between items-center'>
                    <ul className="inline-flex items-center">
                        <li>
                            <ul className="inline-flex text-sm lg:text-base space-x-5 lg:space-x-10 uppercase mt-2 text-gray-600">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </li>
                    </ul>

                    <button>
                        <FiSearch className='w-5 h-5 lg:w-6 lg:h-6 ml-4 lg:ml-10 text-gray-600' />
                    </button>
                </div>

                <button className='block md:hidden' onClick={() => setShowMenu(!showMenu)}>
                    <FiMenu className='w-6 h-6 text-gray-600' />
                </button>
            </div>

            {menuMask}
            {menu}
        </nav>
    );
}

export default NavigationBar;