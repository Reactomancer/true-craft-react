import { FC } from "react";

export const Feedback: FC = () => {
  // placeholders change it whith needed info Zizo
  return (
    <div className="p-10 border-b-stone-700 border">
      <div className="flex flex-row items-center gap-2 mt-4 text-xl">
        <img
          className="w-[75px] h-[75px] rounded-full"
          src="/images/legend.jpeg"
        />
        <span className="text-2xl">Seif</span>
        <span className="text-green-800">verified</span>
      </div>
      <p className="text-[#A3A3A3] text-xl mt-8 max-w-4xl">
        Black diamond pendant Although delivery was longer than expected the
        quality is outstanding and very happy with my purchase. Because of late
        delivery they included a free necklace which was brilliant of them to
        do. Will use again.
      </p>
      <div className="flex justify-end items-center gap-3">
        <span>Was this helpful?</span>
        <img
          className="w-[34px] h-[34px]"
          src="https://www.svgrepo.com/show/243653/like.svg"
        />
      </div>
    </div>
  );
};
