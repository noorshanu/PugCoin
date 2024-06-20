import Title from "components/Title";

function Tokenomics() {
  return (
    <section  id="token" className="container-wrapper rounded-2xl py-10 sm:py-14 px-4 sm:px-10 relative z-10">
   <div className=" flex items-center gap-2">

   <Title
        className="text-[#8431d6] mb-4 text-center"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        Tokenomics
      </Title>



      <div className=" w-[60%] h-[1px] bg-[#376aa6]" />

      <p className=" font-dream text-black font-semibold text-xl">
        All Here
      </p>
   </div>
      <div>
        <p className=" text-center mb-2  font-bold text-base sm:text-lg">Contract : 7r2ZMyL9gGZa55CX3MJt5YJhGwhVjAH5g9juxnEuSi4w</p>
      </div>
      {/* <div className=" flex flex-col sm:flex-row items-center justify-center w-full gap-8">
     <div className="bg-[#c6f2ff] my-5 py-5 px-3 rounded-md w-full white-shadow text-center font-semibold">
            <p className=" uppercase">Buy Tax = 0%</p>
            </div> 

            <div className="bg-[#ffcbdf] w-full my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
              <p className=" uppercase">Sale tax = 3%</p>

            </div>
     </div> */}

      <div className="grid sm:grid-cols-2 gap-10 items-center">
        <img
          src="/images/token.png"
          className="w-full rounded-full border-4  white-shadow"
          alt=""
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        />
        <div
          className=""
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <div className="bg-[#c6f2ff] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Total Supply = 1,000,000,000,000</p>
          </div>
          <div className="bg-[#dbffc6] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Symbol = $solson</p>
          </div>
          <div className="bg-[#e9cdff] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Tax = 0%</p>
          </div>

          <div className="bg-[#ffcbdf] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Revoke mint </p>
          </div>
          <div className="bg-[#ffcbdf] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Revoke Authority</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
