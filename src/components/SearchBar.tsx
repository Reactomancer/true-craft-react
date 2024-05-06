import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Divider, IconButton, InputBase } from "@mui/material";
import { UserData } from "../store/users/types";

interface Props {
  user?: UserData;
}

const SearchBar: React.FC<Props> = ({ user }) => {
  const [search, setSearch] = useState("");
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  return (
    <div className="flex justify-between items-center bg-[#FDF2E9] py-4">
      <div className="flex felx-row w-3/4 px-5 mx-20 rounded-full items-center bg-white h-[82px]">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          onChange={handleSearch}
          value={search}
          size="medium"
        />
        <Divider sx={{ height: 50, m: 1 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <img src="/images/search-icon.png" className="w-[44px]" />
        </IconButton>
      </div>
      <div className="flex flex-row w-1/4 justify-between items-center px-6 text-2xl">
        {user ? (
          <>
            <p>Welcome {user.firstName.toUpperCase()}</p>
            <NavLink to={"/"} className="text-6xl">
              ♡
            </NavLink>
            <NavLink to={"/checkout"} className="text-3xl">
              🛒
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Sign up</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
