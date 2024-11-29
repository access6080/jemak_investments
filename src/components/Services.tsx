const Services = () => {
    return (
        <section id={ "services" } className="flex flex-col md:flex-row justify-center md:justify-evenly items-center w-screen h-92 md:h-[28rem]">
            
            <div className="container flex items-center justify-center w-64 h-64 md:w-[500px] md:h-[350px]">
                <h1 className="text-jemak font-jemak text-2xl md:text-4xl">Services</h1>
            </div>

            <div className="flex justify-center items-center w-72 md:w-[500px] h-64 md:h-[350px]">
                <p className="font-jemak text-sm md:text-xl text-center">Our services include importing Industrial, Technical, Chemical and Protective Equipment from the Uk,
                    Germany and the United States to various industries here in Ghana</p>
            </div>
        </section>
    );
};

export default Services;
