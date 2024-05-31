import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useGoogleTranslate } from "../utils/use-google-translate";
import { useAppDispatch } from "../store/hooks";
import { convertCurrency } from "../store/products/action";
import Box from "@mui/material/Box";

const Header: React.FC = () => {
  const [currency, setCurrency] = useState("EGP");

  const dispatch = useAppDispatch();

  const navigationLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/catalog" },
    { name: "Orders", link: "/orders" },
    { name: "Best sales", link: "/bestsales" },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
    dispatch(convertCurrency({ from: "EGP", to: event.target.value }));
  };

  useGoogleTranslate();

  return (
    <>
      <header style={{zIndex:200000000000000}} className=" fixed top-0 h-[10vh] w-full bg-white flex flex-row p-5 justify-between items-center">
        <div style={{zIndex:2000000000000000000000000000000000000000}} className="flex justify-between items-center w-full">
        <Link className="w-1/4" to={"/"}>
          <img
            src="./images/logo.png"
            alt="TrueCraft Logo"
            className="h-20 w-[30vh] "
          />
        </Link>

        <nav>
          <ul className="flex flex-row gap-16 text-2xl">
            {navigationLinks.map((link) => {
              return (
                <li key={link.name}>
                  <NavLink className="hover:text-blue-700 hover:border-b-[1px] border-b-blue-700 py-2" to={link.link}>
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <Box
          sx={{
            minWidth: 120,
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginTop:'80px',
            zIndex:20000000000000000000000000000000000
            
          }}
        >


          <div 
            className=" flex justify-end p-5 [&_div:first-child+span]:hidden "
            id="google_translate_element"
          />
          {/* <div style={{zIndex:2000000000000000000000000000000000000000000000000000000000000000}}> */}
          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">Currency:</InputLabel>
            <Select 
              
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Currency:"
              onChange={handleChange}
            >
              <MenuItem  value={"EGP"}>EGP</MenuItem>
              <MenuItem  value={"USD"}>USD</MenuItem>
              <MenuItem  value={"RUB"}>RUB</MenuItem>
            </Select>
          </FormControl>
          {/* </div> */}

        </Box>
        </div>
      </header>
    </>
  );
};

export default Header;
