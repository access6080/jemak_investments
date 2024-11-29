import {useState} from 'react';
import logo from '../static/jemak.jpeg';

const Header = () => {
    const [menu, setMenu] = useState("Home");

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setMenu((e.target as HTMLElement).innerText);
    }

    return (
        <header className={`md:sticky md:top-0 md:z-50 flex items-center p-2 lg:px-5 shadow-xl bg-white`}>
            
            <div className='ml-14 my-1 cursor-pointer'>
                <a href={"#home"}>
                    <img src={logo} alt="logo" className="w-[155px] h-[66px] object-contain"/>
                </a>
            </div>

            <div className='flex items-center justify-center ml-52'>
                <div className='space-x-4 md:space-x-8 hidden md:inline-flex ml-2 items-center'>
                    <div className='flex items-center rounded-full cursor-pointer' onClick={handleClick}>
                        <h1 className={`${(menu === 'Home') ? "text-jemak" : "text-black" } md:text-xl lg:text-3xl font-jemak`}>
                            <a href={"#home"}>
                                Home
                            </a>
                        </h1>
                    </div>

                    <div className='flex items-center rounded-full cursor-pointer' onClick={handleClick}>
                        <h1 className={`${(menu === 'Services') ? "text-jemak" : "text-black" } md:text-xl lg:text-3xl font-jemak`}>
                            <a href={"#services"}>
                                Services
                            </a>
                        </h1>
                    </div>
                    <div className='flex items-center rounded-full cursor-pointer ' onClick={handleClick}>
                        <h1 className={`${(menu === 'About') ? "text-jemak" : "text-black" } md:text-xl lg:text-3xl font-jemak`}>
                            <a href={"#about"}>
                                About
                            </a>
                        </h1>
                    </div>
                    <div className='flex items-center rounded-full cursor-pointer' onClick={handleClick}>
                        <h1 className={`${(menu === 'Contact Us') ? "text-jemak" : "text-black" } md:text-xl lg:text-3xl font-jemak`}>
                            <a href={"#contact"}>
                                Contact Us
                            </a>
                        </h1>
                    </div>
                </div> 
            </div>
        </header>
    );
};

export default Header;
