import React from "react";
import { Link } from "react-router-dom";

const DiscoverComponent: React.FC = () => {
  const title = "Discover Exquisite Handmade Craftsmanship";
  // const words = title.split(' ').map((word, index) => (
  //   <div key={index}>{word}</div>
  // ));

  return (
    <>
      <div className="flex flex-col justify-center mx-28 py-12">
        <h1 className="font-[500] text-7xl text-center leading-[116.18px] mb-9">
          {title}
        </h1>
        <div className="flex flex-row gap-5 items-center">
          <img src="/images/legend.jpeg" className="w-[820px]"></img>
          <div className="flex flex-col gap-8">
            <span className="text-3xl">
              Explore unique and skillfully crafted handmade products; made with
              love, for you.
            </span>
            <button className="p-6 bg-black text-white text-2xl w-64">
              {" "}
              <Link to={"/catalog"}>Start shopping</Link>
            </button>
            <div className="flex flex-row gap-10 items-end">
              <p>Experience Art at</p>
              <p>
                200+
                <br />
                unique products sold
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverComponent;
