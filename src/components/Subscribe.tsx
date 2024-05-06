import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import React from "react";

const Subscribe: React.FC = () => {
  return (
    <>
      <div className="px-20 py-10 bg-[#FDF2E9] flex flex-col justify-center items-center gap-[15px]">
        <h2 className="text-[64px] font-bold">Can’t get enough?</h2>
        <p className="mb-5 text-[64px]">Subscribe to our hourly updates</p>
        <form className="flex  gap-5 flex-col w-[30%]">
          <Input placeholder="Your Email here" />
          <Button
            style={{ background: "black" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Subscribe
          </Button>
        </form>
      </div>
    </>
  );
};

export default Subscribe;
