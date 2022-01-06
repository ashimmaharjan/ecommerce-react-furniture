import { FiSearch } from 'react-icons/fi'

const NavigationBar = () => {
    return (
        <nav className="w-full h-36 bg-gray-100 pt-6">
            <div className="w-3/4 mx-auto flex items-center justify-between">
                <ul className="inline-flex space-x-16 items-center">
                    <li className="text-4xl font-bold leading-8"><a href="">Shopnik.</a></li>
                    <li>
                        <ul className="inline-flex space-x-10 uppercase mt-2 text-gray-600">
                            <li><a href="">Home</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">News</a></li>
                        </ul>
                    </li>
                </ul>

                <button>
                    <FiSearch className='w-6 h-6 text-gray-600' />
                </button>
            </div>
        </nav>
    );
}

export default NavigationBar;