function About() {
  return (
    <section className=" relative container-wrapper">
      <div className=" bg-[#9cd8e0a1] backdrop-blur-lg border-2 border-[#0244a5b3]  flex flex-col lg:flex-row gap-8 items-center justify-center w-full rounded-2xl border-solid  border-lyllw/70">
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="w-full h-full">
            <img src="images/about.jpeg" alt="" className=" rounded-xl"        data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-4 w-full lg:w-1/2 text-center lg:text-left"  data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine">
          <div>
            <h1 className="text-stroke-sm text-4xl md:text-5xl  font-dream uppercase">Who's PUGCOIN</h1>

            <p>
              Brett is the legendary character from Matt Furie’s Boys' club
              comic. He is a dancer and loves video games. Now he is living on
              the BASE blockchain as a Fan tribute. He has become blue mascot of
              the blue chain, BASE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
