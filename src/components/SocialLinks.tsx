import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const SocialLinks: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 ">
        <h2 className="w-1/4 text-sm whitespace-nowrap">Follow us:</h2>
        <div className="flex flex-row gap-5 w-full">
          <a href="https://www.instagram.com/">
            <InstagramIcon
              style={{ width: "25", height: "25", color: "white" }}
              className="bg-black rounded-full p-1"
            />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon
              style={{ width: "25", height: "25", color: "white" }}
              className="bg-black rounded-full p-1"
            />
          </a>
          <a href="https://www.twitter.com/">
            <TwitterIcon
              style={{ width: "25", height: "25", color: "white" }}
              className="bg-black rounded-full p-1"
            />
          </a>
          <a href="https://www.vk.com/">
            <figure className="bg-black rounded-full p-1 w-[25px] h-[25px] object-contain">
              <img width={25} height={25} src="images/vk.svg" />
            </figure>
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
