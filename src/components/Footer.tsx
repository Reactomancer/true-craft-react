import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const footerItems = [
    {
      title: "Company",
      items: [
        { title: "About Us", link: "/" },
        { title: "Blog", link: "/" },
        { title: "FAQs", link: "/" },
        { title: "Our Team", link: "/" },
      ],
    },
    {
      title: "Explore",
      items: [
        { title: "New Arrivals", link: "/" },
        { title: "Gift Cards", link: "/" },
        { title: "Sales up to 50%", link: "/" },
        { title: "Top Sellers", link: "/" },
      ],
    },
    {
      title: "Support",
      items: [
        { title: "Contact us", link: "/" },
        { title: "Shipping Info", link: "/" },
        { title: "Return Policy", link: "/" },
      ],
    },
    {
      title: "Contact us",
      items: [
        { title: "TrueCraft@mail.ru", link: "mailto:TrueCraft@mail.ru" },
        { title: "+79880717089", link: "tel:+79880717089" },
        { title: "+201278324417", link: "tel:+201278324417" },
      ],
    },
  ];

  return (
    <div className="px-20 py-10 bg-[#FDF2E9] flex flex-row gap-20">
      <div className="flex flex-col justify-between gap-4">
        {" "}
        <h2 className="font-bold text-2xl">TrueCraft</h2>
        <p className="text-xl">Changing the way you Shop</p>
        <Link
          className="bg-black p-2 px-7 text-white rounded-lg text-center"
          to={"/register"}
        >
          <button>Sign up</button>
        </Link>
      </div>
      <div
        className="flex flex-row justify-between w-full
    "
      >
        {footerItems.map((item) => (
          <div className="flex flex-col items-start gap-5">
            <h2>{item.title}</h2>
            <ul className="flex flex-col gap-2">
              {item.items.map((item) => (
                <Link to={item.link}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
