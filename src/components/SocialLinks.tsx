import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const SocialLinks: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center py-20 ">
        <h2 className="w-1/4 text-2xl">Follow us:</h2>
        <div className="flex flex-row gap-20">
          <a href="https://www.instagram.com/">
            <InstagramIcon
              style={{ width: "150px", height: "150px", color: "white" }}
              className="bg-black rounded-full p-3"
            />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon
              style={{ width: "150px", height: "150px", color: "white" }}
              className="bg-black rounded-full p-3"
            />
          </a>
          <a href="https://www.twitter.com/">
            <TwitterIcon
              style={{ width: "150px", height: "150px", color: "white" }}
              className="bg-black rounded-full p-3"
            />
          </a>
          <a href="https://www.vk.com/">
            <figure className="bg-black rounded-full p-3 w-[150px] h-[150px]">
              <img src="images/vk.svg" />
            </figure>
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
