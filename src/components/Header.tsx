import React from "react";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Header: React.FC = () => {
  const [currency, setCurrency] = React.useState("EGP");
  const [language, setLanguage] = React.useState("ENG");
  const navigationLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/catalog" },
    { name: "Blog", link: "/" },
    { name: "Best sales", link: "/catalog/items" },
  ];
  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };
  const handleChangeLang = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <header className="flex flex-row p-5 justify-between items-center">
      <Link className="w-1/4" to={"/"}>
        <img src="./images/logo.png" alt="TrueCraft Logo" className="h-auto " />
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language:"
            onChange={handleChangeLang}
          >
            <MenuItem value={"ENG"}>ENG</MenuItem>
            <MenuItem value={"ARA"}>ARA</MenuItem>
            <MenuItem value={"RUS"}>RUS</MenuItem>
          </Select>
        </FormControl>
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
