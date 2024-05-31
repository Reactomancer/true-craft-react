import React from "react";
import { Link } from "react-router-dom";

const DiscoverComponent: React.FC = () => {
  // const title = "";
  // const words = title.split(' ').map((word, index) => (
  //   <div key={index}>{word}</div>
  // ));

  return (
    <>
      <div className="flex flex-col justify-center mx-28 py-12 px-20">
        <h1 className="font-[500] text-7xl text-center leading-[116.18px] mb-9">
          {/* {title} */}
          <h1 className={``} >Discover Exquisite <small className={`text-[22px] text-blue`}>Handmade Craftsmanship</small></h1>
        </h1>
        <div className="flex flex-center gap-5 items-start  ">
          <div className="flex flex-col items-start justify-between h-[50vh] gap-8">
            <div>
            <p className={`font-bold text-3xl py-2 text-[#FF9500]`}>Explore uniquely</p>
            <span className="text-xl w-1/2 text-black">
            Explore uniquely crafted handmade products, meticulously made with care and exceptional skill. These products reflect the efforts of talented artisans and artists, who pour their heart and soul into every detail. Here you will find a diverse range of items, from traditional handcrafted crafts to modern artistic pieces. Each product carries its own special story and unique flavor, ready to transform your home or cherished gift into an unparalleled piece of art. Shop now and discover a unique and enjoyable shopping experience, where you can find beauty and authenticity in every corner.
            </span>
            </div>
            <div>
            <button className="p-6 bg-[#013064] rounded-[10px] hover:bg-orange-500 transition-all duration-1000 ease-in-out text-white text-2xl w-64">
              {" "}
              <Link className={``} to={"/catalog"}>Start shopping</Link>
            </button>
            <div className="flex flex-row gap-10 items-end">
              {/* <p>Experience Art at</p> */}
              <p>
                <small className={`text-center px-2 text-[#013064]`}>200+</small>
                {/* <br /> */}
                unique products sold
              </p>
            </div>
            </div>
          </div>
          <img src="/images/legend.jpeg" className="w-[60%] h-[50vh] rounded-xl"></img>

        </div>
      </div>
    </>
  );
};

export default DiscoverComponent;