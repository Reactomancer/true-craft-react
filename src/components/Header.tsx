import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useGoogleTranslate } from "../utils/use-google-translate";

const Header: React.FC = () => {
  const [currency, setCurrency] = useState("EGP");

  const navigationLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/catalog" },
    { name: "Blog", link: "/" },
    { name: "Best sales", link: "/bestsales" },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  useGoogleTranslate();

  return (
    <>
      <header className="flex flex-row p-5 justify-between items-center">
        <Link className="w-1/4" to={"/"}>
          <img
            src="./images/logo.png"
            alt="TrueCraft Logo"
            className="h-auto "
          />
        </Link>
        <nav>
          <ul className="flex flex-row gap-16 text-2xl">
            {navigationLinks.map((link) => {
              return (
                <li key={link.name}>
                  <NavLink className="hover:text-blue-700" to={link.link}>
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
          }}
        >
          <div
            className="flex justify-end p-5 [&_div:first-child+span]:hidden"
            id="google_translate_element"
          />
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
    </>
  );
};

export default Header;
