const About = () => {
    return (
        <section id={ "about" } className="flex flex-col md:flex-row justify-center md:justify-evenly items-center w-screen h-92 md:h-[28rem]">
            
            <div className="container flex items-center justify-center w-64 h-64 md:w-[500px] md:h-[350px]">
                <h1 className="text-jemak font-jemak text-2xl md:text-4xl">About Us</h1>
            </div>

            <div className="flex justify-center items-center w-72 md:w-[500px] h-64 md:h-[350px]">
                <p className="font-jemak text-sm md:text-xl text-center">Founded in March 1993, we have grown to become one of the leading suppliers in this country
                    by following our core values of making each aspect of every transaction a positive
                    satisfying experience and treating our customers fairly and equitably
                </p>
            </div>
        </section>
  );
};

export default About;
