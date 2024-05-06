import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { Link } from "react-router-dom";

const SocialLinks: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center py-20 ">
        <h2 className="w-1/4 text-2xl">Follow us:</h2>
        <div className="flex flex-row gap-20">
          <Link to={"/"}>
            <InstagramIcon
              style={{ width: "150px", height: "150px", color: "white" }}
              className="bg-black rounded-full p-3"
            />
          </Link>
          <Link to={"/"}>
            <FacebookIcon
              style={{ width: "150px", height: "150px", color: "white" }}
              className="bg-black rounded-full p-3"
            />
          </Link>
          <Link to={"/"}>
            <TwitterIcon
              style={{ width: "150px", height: "150px", color: "white" }}
              className="bg-black rounded-full p-3"
            />
          </Link>
          <Link to={"/"}>
            <figure className="bg-black rounded-full p-3 w-[150px] h-[150px]">
              <img src="images/vk.svg" />
            </figure>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
