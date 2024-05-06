import React from "react";

interface Props {
  text: string;
}

const TestmonialComponent: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex flex-row gap-4 items-center bg-[#1B1919] py-[40px] px-[20px] rounded-[30px] h-fit">
      <img
        src="/images/person.png"
        className="w-[78px] h-[78px] rounded-full"
      />
      <span className="text-3xl">{text}</span>
    </div>
  );
};

export default TestmonialComponent;
