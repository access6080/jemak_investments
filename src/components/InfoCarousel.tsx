import chemical from '../static/chemical.png';
import tools from '../static/tools.jpeg';
import conveyor from '../static/conveyor.jpeg';
import ppe from '../static/ppe.jpeg';

const InfoCarousel = () => {
    return (
        <section className="flex flex-col justify-start w-screen my-10 md:my48">
            <h1 className="ml-4 md:ml-10 mb-10 font-jemak text-xl md:text-4xl">We import...</h1>

            <div className="grid-container p-2 md:carousel">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={tools} alt="tools" className="rounded-2xl w-48 h-48 md:w-64 md:h-64 shadow-md" />
                    <p className="font-jemak text-sm md:text-xl text-gray-500 font-extralight text-center">Tools</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={chemical} alt="chemicals" className="rounded-2xl w-48 h-48 md:w-64 md:h-64 shadow-md"/>
                    <p className="font-jemak text-sm md:text-xl text-gray-500 font-extralight text-center">Chemicals</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={conveyor} alt="conveyor" className="rounded-2xl w-48 h-48 md:w-64 md:h-64 shadow-md" />
                    <p className="font-jemak text-sm md:text-xl text-gray-500 font-extralight text-center">Machine Parts</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={ppe} alt="ppe" className="rounded-2xl w-48 h-48 md:w-64 md:h-64 shadow-md" />
                    <p className="font-jemak text-sm md:text-xl text-gray-500 font-extralight text-center">Protective Equipment</p>
                </div>
            </div>

            <div className="mt-10 flex justify-end w-full ">
                <h1 className="font-jemak text-xl md:text-4xl mr-4 md:mr-10">...Among Others</h1>
            </div>

            
        </section>
  );
};

export default InfoCarousel;
