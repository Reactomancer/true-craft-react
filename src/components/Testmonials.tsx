import React from "react";
import TestmonialComponent from "./TestmonialComponent";

const Testmonials: React.FC = () => {
  return (
    <div className="bg-black py-[60px]">
      <div className="flex flex-col text-white gap-[28px] justify-center items-center">
        <p className="text-[44px]">500+ happy customers</p>
        <p className="text-[64px]">Hear From Our Customers</p>
      </div>

      <div className="mt-[170px] px-5 text-white flex flex-row justify-center items-center gap-12">
        <div className=" flex flex-col gap-40">
          <TestmonialComponent
            text={
              "Every piece I purchased tells a story and is unique in its own way."
            }
          />
          <TestmonialComponent
            text={"The packaging and care into the shipping was outstanding."}
          />
        </div>
        <TestmonialComponent
          text={"Beautiful products and fantastic customer service."}
        />
        <div className=" flex flex-col gap-40">
          <TestmonialComponent
            text={"I ordered a custom piece and it exceeded my expectations."}
          />
          <TestmonialComponent
            text={"Their craftsmanship is truly unmatched. Very satisfied."}
          />
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
