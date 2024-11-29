import mail from '../static/mail.svg'
import phone from '../static/phone.svg'

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-center md:justify-between w-screen p-2">
            <div className="flex justify-center md:items-end mb-2 md:mb-0">
                <p className="font-jemak text-gray-500 font-extralight text-xs md:text-md">
                    © Jemak Investments 2025, All Rights Reserved
                </p>
            </div>

            <div className="flex justify-center">
                <h1 className="text-md md:text-xl font-jemak">Contact Us</h1>
                <div className="flex flex-col ml-10">
                    
                    <div className="flex">
                        <img src={phone} alt="phone icon" />
                        <div className="ml-4">
                            <p className="font-jemak text-gray-500 font-extralight text-md md:text-base">+233 244 244 262</p>
                        </div>
                    </div>

                    <div className="flex">
                        <img src={mail} alt="mail icon"/>
                        <div className="ml-4">
                            <p className="font-jemak text-gray-500 font-extralight text-md md:text-base">jemakgh@gmail.com</p>
                        </div>
                    </div>

                    <p className="font-jemak text-gray-500 font-extralight text-md md:text-base"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        jemak@ghana.com
                    </p>
                    
                </div>
            </div>
            
        </footer>
  );
};

export default Footer;
