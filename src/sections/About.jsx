function About() {
  return (
    <section className=" relative container-wrapper" id="about">
      <div className=" bg-[#9cd8e0a1] backdrop-blur-lg border-2 border-[#0244a5b3]  flex flex-col lg:flex-row gap-8 items-center justify-center w-full rounded-2xl border-solid  border-lyllw/70">
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="w-full h-full">
            <img
              src="images/about.jpeg"
              alt=""
              className=" rounded-xl"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center gap-y-4 w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <h1 className="text-stroke-sm text-4xl md:text-5xl  font-dream uppercase">
              Who's PUGCOIN
            </h1>
            <p className=" text-xl  py-2 font-dream">Relax, Meme, and Moon Together!</p>

            <p className=" text-lg">
              With PugCoin, there's no need to panic. Sit back, enjoy the memes,
              and watch your investment moon. PugCoin is all about combining the
              joy of cute doggy memes with the exciting world of crypto. Join
              the pack, enjoy the ride, and let's moon together with PugCoin!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
