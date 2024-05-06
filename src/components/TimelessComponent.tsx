import React from "react";

const TimelessComponent: React.FC = () => {
  return (
    <>
      <div className="max-w-[80%] mx-auto py-10">
        <div className="flex justify-between gap-10">
          <img src="images/timeless1.jpeg" className="h-96 w-64" />
          <div className="flex flex-col gap-8">
            <h2 className="font-bold text-5xl mb-5">
              Timeless Craftsmanship Journey
            </h2>
            <p className="text-xl">
              Our skilled artisans infuse their soul into each creation.
            </p>
          </div>
          <img src="images/timeless2.jpeg" className="h-96 w-64" />
        </div>
        <p className="pt-6 text-sm">
          &#42;Our artists make each piece unique, celebrating individuality.
        </p>
      </div>
    </>
  );
};

export default TimelessComponent;
