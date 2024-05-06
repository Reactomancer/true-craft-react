import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Header: React.FC = () => {
  const [currency, setCurrency] = React.useState("EGP");
  const navigationLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/catalog" },
    { name: "Blog", link: "/" },
    { name: "Best sales", link: "/catalog/items" },
  ];
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };
  return (
    <header className="flex flex-row p-5 justify-between items-center">
      <img
        src="./images/logo.png"
        alt="TrueCraft Logo"
        className="h-auto w-1/4"
      />
      <nav>
        <ul className="flex flex-row gap-16 text-2xl">
          {navigationLinks.map((link) => {
            return (
              <li>
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Currency:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Currency:"
            onChange={handleChange}
          >
            <MenuItem value={"EGP"}>EGP</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"RUB"}>RUB</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </header>
  );
};

export default Header;
