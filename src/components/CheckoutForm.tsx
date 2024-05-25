import React, { useEffect, useState } from "react";
import { Button, TextField, Autocomplete } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userByIdSelector } from "../store/users/selectors";
import { submitOrder } from "../store/cart/actions";
import { getUserCart } from "../store/cart/actions";
import {
  userCartDiscountPercentageSelector,
  userCartSelector,
  userCartTotalSelector,
} from "../store/cart/selectors";
import { CartUserInfo } from "../store/cart/types";
import { cartSlice } from "../store/cart/cartSlice";

const cityOptions = {
  Russia: [
    "Moscow",
    "Saint Petersburg",
    "Novosibirsk",
    "Yekaterinburg",
    "Nizhny Novgorod",
    "Kazan",
    "Chelyabinsk",
    "Omsk",
    "Samara",
    "Rostov-on-Don",
  ],
  Egypt: [
    "Cairo",
    "Alexandria",
    "Giza",
    "Shubra El-Kheima",
    "Port Said",
    "Suez",
    "Luxor",
    "Aswan",
    "Mansoura",
    "El-Mahalla El-Kubra",
  ],
  USA: [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ],
};

const countryOptions = ["Russia", "Egypt", "USA"];

export const CheckoutComponent: React.FC = () => {
  const user = useAppSelector(userByIdSelector);
  const cart = useAppSelector(userCartSelector);
  const total = useAppSelector(userCartTotalSelector);
  const discount = useAppSelector(userCartDiscountPercentageSelector);
  const [submit, setSubmit] = useState(false);
  const dispatch = useAppDispatch();

  const { handleSubmit, register, watch, control, resetField } =
    useForm<CartUserInfo>({
      defaultValues: { userId: user?.id },
    });

  const handleAddUserInfo = () => {
    dispatch(cartSlice.actions.addUserInfo(watch()));
  };

  const handleSubmitOrder = (data: CartUserInfo) => {
    dispatch(submitOrder(data));
  };

  const shipping = ((total ?? 1) / (cart?.length ?? 1)).toFixed(2);

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch, user?.id]);

  return (
    <div className="flex flex-row w-full">
      <form
        onSubmit={handleSubmit(handleSubmitOrder)}
        className="flex flex-col justify-between items-center w-lvw"
      >
        {!submit ? (
          <>
            <div className="flex flex-row flex-wrap gap-5 p-6 justify-center items-center pad">
              <div className="flex flex-col gap-2 flex-wrap">
                <label>First name</label>
                <TextField
                  {...register("firstName", { required: true })}
                  required
                  sx={{ height: "70px", width: "500px" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Last name</label>
                <TextField
                  {...register("lastName", { required: true })}
                  required
                  sx={{ height: "70px", width: "500px" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <TextField
                  {...register("email", { required: true })}
                  sx={{ height: "70px", width: "500px" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Country</label>
                <Controller
                  control={control}
                  name="country"
                  render={({ field: { onChange, ...field } }) => (
                    <Autocomplete
                      options={countryOptions}
                      autoComplete={false}
                      getOptionLabel={(option) => option}
                      onChange={(_event, newValue) => {
                        onChange(newValue ? newValue : null);
                        resetField("city");
                      }}
                      {...field}
                      renderInput={(params) => (
                        <TextField
                          sx={{ height: "70px", width: "500px" }}
                          required
                          autoComplete="off"
                          {...params}
                        />
                      )}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>City</label>
                <Controller
                  control={control}
                  name="city"
                  render={({ field: { onChange, ...field } }) => (
                    <Autocomplete
                      onChange={(_event, newValue) => {
                        onChange(newValue ? newValue : null);
                      }}
                      {...field}
                      // ts-ignore
                      options={cityOptions[watch("country")] ?? []}
                      getOptionLabel={(option) => option}
                      autoComplete={false}
                      renderInput={(params) => (
                        <TextField
                          sx={{ height: "70px", width: "500px" }}
                          required
                          autoComplete="off"
                          {...params}
                        />
                      )}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Zip Code</label>
                <TextField
                  {...register("zipCode", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  sx={{ height: "70px", width: "500px" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label> Address</label>
                <TextField
                  {...register("address", { required: true })}
                  sx={{ height: "70px", width: "500px" }}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button
                variant="contained"
                type="button"
                onClick={() => {
                  setSubmit(true);
                  handleAddUserInfo();
                }}
                sx={{
                  height: "56px",
                  background: "#FDF2E9",
                  color: "black",
                  fontWeight: "bold",
                  ":hover": { background: "#FDF2E9" },
                }}
              >
                Continue
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col flex-wrap  justify-center gap-10 items-start h-full">
              <div className="flex flex-row gap-2 w-full justify-center items-center">
                <label className="w-max whitespace-nowrap">Number Card</label>
                <TextField required type="number" className="w-full" />
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <label>MM/YY</label>
                  <TextField required type="number" />
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <label>CVV</label>
                  <TextField required type="number" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button
                variant="contained"
                type="submit"
                sx={{
                  height: "56px",
                  background: "#FDF2E9",
                  color: "black",
                  fontWeight: "bold",
                  ":hover": { background: "#FDF2E9" },
                }}
              >
                Continue
              </Button>
            </div>
          </>
        )}
      </form>

      <div className="bg-[#F2F2F2] w-1/4 min-w-96 flex flex-col justify-between items-center">
        <p className="text-3xl text-center pt-5 pb-16 font-bold">
          Shopping Cart
        </p>
        <ul className="w-full">
          {cart?.map(({ product }) => (
            <li className="border-b-black border px-4 py-3 flex flex-row justify-between">
              <span>{product.productName}</span>
              <span className="whitespace-nowrap">
                {product.currentPrice} EGP
              </span>
            </li>
          ))}
        </ul>
        <div className="bg-[#FDF2E9] flex flex-col justify-center items-center my-20 gap-4 w-[70%]">
          <div className="border-b-2 px-10 w-full py-5 border-[#000000]">
            <span>Shipping: </span>
            <span>{shipping} EGP</span>
          </div>
          <div className="border-b-2 px-10 w-full py-5 border-[#000000]">
            <span>Discount: </span>
            <span>{discount}%</span>
          </div>
          <div className="border-b-2 px-10 w-full py-5 border-[#000000]">
            <span>Total: </span>
            <span>{total ?? 1 + Number(shipping)} EGP</span>
          </div>
        </div>
      </div>
    </div>
  );
};
