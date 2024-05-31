import React from "react";
import { Link } from "react-router-dom";

const TopSales: React.FC = () => {
  const data = [
    { title: "Beads", image: "/images/beads.png", link: "1" },
    { title: "Pharaonic papyrus", image: "/images/pharoh.jpeg", link: "2" },
    { title: "Ceramic", image: "/images/ceramic.jpeg", link: "3" },
    { title: "Ceramic", image: "/images/ceramic.jpeg", link: "3" },
    { title: "Ceramic", image: "/images/ceramic.jpeg", link: "3" },
  ];
  return (
    <>
      <div className="bg-[#FDF2E9] py-5">
        <h1 className="font-bold text-7xl text-center"> Top Sales</h1>
        <div className="flex flex-row justify-between items-center pb-5 mx-auto px-6 gap-2 flex-wrap">
          {data.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col justify-center items-center gap-10 py-10">
                  <img src={item.image} className="rounded-full w-36 h-36" />
                  <Link to={`/catalog/${item.link}`}>
                    <button className="min-w-9 py-5 rounded-full bg-white text-2xl px-3">
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
