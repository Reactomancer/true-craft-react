import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Divider, IconButton, InputBase, Popover } from "@mui/material";
import { Favorite, UserData } from "../store/users/types";

interface Props {
  user?: UserData;
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<Props> = ({ user, onSearch: handleSearchClick }) => {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const navigate = useNavigate();
  const handleNavigate = (item: Favorite) => {
    navigate(`/catalog/${item.product?.categoryId}/${item.productId}`);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div className="flex justify-between items-center bg-[#FDF2E9] py-4">
      <div className="flex flex-row w-3/4 px-5 mx-20 rounded-full items-center bg-white h-[82px]">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          onChange={handleSearch}
          value={search}
          size="medium"
        />
        <Divider sx={{ height: 50, m: 1 }} orientation="vertical" />
        <IconButton
          onClick={() => handleSearchClick(search)}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <img src="/images/search-icon.png" className="w-[44px]" />
        </IconButton>
      </div>
      <div className="flex flex-row w-1/4 justify-between items-center px-6 text-2xl">
        {user?.firstName != null ? (
          <>
            <p>Welcome {user?.firstName?.toUpperCase()}</p>
            <IconButton id={id} onClick={handleClick}>
              <svg
                fill="#ff0000"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 455 455"
                stroke="#ff0000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.383-60.399-46.92-99.132-46.92 C57.586,10.346,0,67.931,0,138.714c0,55.426,33.049,119.535,98.23,190.546c50.162,54.649,104.729,96.96,120.257,108.626l9.01,6.769 l9.009-6.768c15.53-11.667,70.099-53.979,120.26-108.625C421.95,258.251,455,194.141,455,138.714 C455,67.931,397.414,10.346,326.632,10.346z"></path>{" "}
                </g>
              </svg>
            </IconButton>
            <NavLink to={"/checkout"} className="text-3xl">
              🛒
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Sign up</NavLink>
            <IconButton id={id} onClick={handleClick}>
              <svg
                fill="#ff0000"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 455 455"
                stroke="#ff0000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.383-60.399-46.92-99.132-46.92 C57.586,10.346,0,67.931,0,138.714c0,55.426,33.049,119.535,98.23,190.546c50.162,54.649,104.729,96.96,120.257,108.626l9.01,6.769 l9.009-6.768c15.53-11.667,70.099-53.979,120.26-108.625C421.95,258.251,455,194.141,455,138.714 C455,67.931,397.414,10.346,326.632,10.346z"></path>{" "}
                </g>
              </svg>
            </IconButton>
            <NavLink to={"/checkout"} className="text-3xl">
              🛒
            </NavLink>
          </>
        )}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {user?.favorites?.length ? (
          <ul>
            {user.favorites?.map((item) => (
              <button
                className=" flex flex-row gap-3 p-4 items-center"
                onClick={() => handleNavigate(item)}
              >
                <img
                  src={item.product.previewImageLink}
                  width={100}
                  height={100}
                />
                <p>{item.product.productName}</p>
              </button>
            ))}
          </ul>
        ) : (
          <p className="p-3">No Favourite Items Yet</p>
        )}
      </Popover>
    </div>
  );
};

export default SearchBar;
