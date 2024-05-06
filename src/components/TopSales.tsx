import React from "react";
import { Link } from "react-router-dom";

const TopSales: React.FC = () => {
  const data = [
    { title: "Beads", image: "/images/beads.png" },
    { title: "Pharaonic papyrus", image: "/images/ceramic.jpeg" },
    { title: "Ceramic", image: "/images/pharoh.jpeg" },
  ];
  return (
    <>
      <div className="bg-[#FDF2E9] py-5">
        <h1 className="font-bold text-7xl text-center">TOP SALES</h1>
        <div className="flex flex-row justify-between items-center pb-5 w-[95%] mx-auto">
          {data.map((item) => {
            return (
              <div className="felx flex-row justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-10 py-10">
                  <img src={item.image} className="rounded-full w-44 h-44" />
                  <Link to={"/"}>
                    <button className="w-[400px] py-5 rounded-full bg-white text-3xl">
                      {item.title}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopSales;
