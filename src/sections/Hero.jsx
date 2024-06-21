function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#e39847] h-full  sm:h-[100%]">
      <div className="container-wrapper  flex flex-col sm:flex-row  justify-between pt-[10%] pb-12 items-center  lg:drop-shadow-[0_0_10rem_white]">
        <div className=" w-full sm:w-1/2">
          <img
            src="/images/hero.png"
            className=" mx-auto floating "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            alt=""
          />

     
        </div>

        <div
          className="  mt-4 sm:mt-0 "
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <h1 className=" text-[#000000] text-2xl sm:text-3xl font-dream uppercase pb-2  max-w-4xl mx-auto">
            {" "}
            INTRODUCING
          </h1>
          <p className=" max-w-3xl  text-[#000000] text-4xl font-dream sm:text-7xl mx-auto text-stroke-sm">
            PUGCOIN
          </p>
            <p className=" mt-2 font-dream text-xl">
            Why so serious about crypto? Relax and let PugCoin bring the fun!
            </p>

          <div className="hidden sm:flex items-center gap-5 justify-start  mt-4">
            <div className=" relative">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="  "
              >
               <img src="images/dex.png" alt="" className=" h-[60px] bg-black rounded-full" />
              </a>
            </div>
            <a href="#" target="_blank" rel="noreferrer">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[55px]" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <img src="X.png" alt="" className="w-auto h-[55px]" />
            </a>
          </div>
        </div>

      
      </div>
      <div className=" flex justify-center bg-[#376aa6] border-2 rounded-full w-full  sm:w-[650px] mx-auto py-2">
          <a href="/" className=" text-center font-dream text-xl ">CA:Comingsoon.......</a>
        </div>
    </section>
  );
}

export default Hero;
