import banner from '../static/banner.jpg';

const Banner = () => {
    return (
        <section id={ "home" } className="relative w-screen h-80 md:h-96">
            <img src={banner} alt="banner" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-xl md:text-4xl font-bold font-jemak">Welcome to Jemak Investments</h1>
                <p className="mt-2 md:mt-4 text-sm md:text-xl font-jemak">Suppliers of all your Technical, Industrial, Chemical and Workshop needs</p>
            </div>
        </section>
  );
};

export default Banner;
