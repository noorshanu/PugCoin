import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";
import Title from "components/Title";

const Button = ({ children, className, link }) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className={`py-3 px-4 rounded-full bg-[rgba(255,255,255,.2)] text-sm transition-all duration-200 hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </a>
  );
};

const SocialLink = ({ children }) => {
  return (
    <a
      href="/"
      className="w-[4em] h-[4em] rounded-full bg-white flex items-center justify-center text-[100%] text-white"
    >
      {children}
    </a>
  );
};

function JoinCommunity() {
  return (
    <section className="pt-24 relative z-10 overflow-hidden container-wrapper ">
      <div className=" flex flex-col sm:flex-row items-center gap-2">
        <Title
          className="text-[#8431d6] mb-4 text-center"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          Contact us
        </Title>

        <div className=" w-[55%] h-[1px] bg-[#376aa6]" />

        <p className=" font-dream text-black font-semibold text-xl">CONNECT WITH US</p>
      </div>
      <div className="container-wrapper">

      <div className=" w-full  max-w-xl  mx-auto flex flex-col justify-center items-center gap-6 my-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-dream lh-1_4 text-stroke-sm">
              JOIN OUR COMMUNITY
            </h1>

            <input
              type="text"
              className="flex-1 h-14 bg-white rounded-full px-6 py-4 text-black w-full text-base"
              placeholder="Your email"
            />

            <div className="flex items-center gap-5 justify-center lg:justify-end">
             <a href="/">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[55px]" />
             </a>
             <a href="/">
              <img src="WEB.png" alt="" className="w-auto h-[55px]" />
             </a>

             <a href="/">
              <img src="X.png" alt="" className="w-auto h-[55px]" />
             </a>
            </div>
          </div>
        {/* <div className=" flex items-center justify-between"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-2 lg:mb-20 text-center lg:text-left space-y-6 lg:space-y-0">
          <div className=" max-w-xl">

          <img src="images/foot-logo.png" alt="" className="h-[16rem]" />
          </div>
          
        </div> */}

        <div className="flex  items-center justify-center ">
          <p className="text-center text-sm  font-bold text-black">
            All rights reserved | by PUGCOIN 2023-24
          </p>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
