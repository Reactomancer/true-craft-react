import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="py-[200px] px-[120px] text-[24px] flex flex-row gap-[132px]">
      <img src="images/hero.svg" width={600} />
      <div>
        <h2 className="text-[64px] font-bold mb-[51px]">
          Indulge in Bespoke Creations
        </h2>
        <p>We offer personalized artistry tailored to your taste.</p>
        <p>Transform your space with our exclusive handmade pieces.</p>
      </div>
    </div>
  );
};

export default HeroSection;
