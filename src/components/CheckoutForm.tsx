// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useCallback, useState } from "react";
import { Button, TextField, Autocomplete } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userByIdSelector } from "../store/users/selectors";
import { deleteProductFromCart, submitOrder } from "../store/cart/actions";
import {
  shippingFeeSelector,
  userCartDiscountPercentageSelector,
  userCartSelector,
  userCartTotalSelector,
} from "../store/cart/selectors";
import { CartUserInfo } from "../store/cart/types";
import { cartSlice } from "../store/cart/cartSlice";
import {
  conversionSelector,
  currencySelector,
} from "../store/products/selectors";
import { NumberInput } from "./NumberInput";

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

const deliveryOptions = {
  Russia: [
    "Почта России (6 дней, +100 руб.)",
    "СДЭК (4 дня, +150 руб.)",
    "Деловые Линии (14 дней, +50 руб.)",
  ],
  Egypt: [
    "Nahdi (4 days, +20 EGP)",
    "Speedex (6 days, +13.5 EGP)",
    "Fedex (8 days, +10 EGP)",
    "Aramex (14 days, +2.5 EGP)",
  ],
  Usa: ["UPS", "Fedex", "USPS", "DHL"],
};

const deliveryShippingFees = {
  "Почта России (6 дней, +100 руб.)": 100,
  "СДЭК (4 дня, +150 руб.)": 150,
  "Деловые Линии (14 дней, +50 руб.)": 50,
  "Nahdi (4 days, +20 EGP)": 20,
  "Speedex (6 days, +13.5 EGP)": 13.5,
  "Fedex (8 days, +10 EGP)": 10,
  "Aramex (14 days, +2.5 EGP)": 2.5,
  UPS: null,
  Fedex: null,
  USPS: null,
  DHL: null,
};

export const CheckoutComponent: React.FC = () => {
  const user = useAppSelector(userByIdSelector);
  const cart = useAppSelector(userCartSelector);
  const total = useAppSelector(userCartTotalSelector);
  const discount = useAppSelector(userCartDiscountPercentageSelector);
  const [submit, setSubmit] = useState(false);
  const [ccNumber, setCcNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [totalCountProducts, setTotalCountProducts] = useState<
    Record<number, number>
  >({});
  const rate = useAppSelector(conversionSelector);
  const currency = useAppSelector(currencySelector);
  const shippingFee = useAppSelector(shippingFeeSelector);

  const formatAndSetCcNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }

    setCcNumber(spacedNumber);
  };

  const handleSetExpiryDate = (event) => {
    setExpiryDate(event.target.value);
  };

  const expiryFormat = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };

  const dispatch = useAppDispatch();

  const { handleSubmit, register, watch, control, resetField } =
    useForm<CartUserInfo>({
      defaultValues: { userId: user?.id },
    });

  const handleAddUserInfo = () => {
    dispatch(cartSlice.actions.addUserInfo(watch()));
  };

  const totalProdutsCountsSum = Object.entries(totalCountProducts).reduce(
    (accumulator, [price, count]) => {
      if (count == null || count < 2) {
        return accumulator;
      }

      const calculatedValue = Number(price) * (count - 1);
      return accumulator + calculatedValue;
    },
    0
  );

  const totalSum = totalProdutsCountsSum + total;

  const handleSubmitOrder = (data: CartUserInfo) => {
    dispatch(submitOrder({ ...data, total: totalSum }));
  };

  const handleDeleteProductFromCart = (productId: number) => {
    dispatch(
      deleteProductFromCart({ productId, sessionId: user?.shoppingSession?.id })
    );
  };

  const handleSetShippingFee = useCallback(
    (shippingProvider: string) => {
      dispatch(
        cartSlice.actions.setShippingFee(deliveryShippingFees[shippingProvider])
      );
    },
    [dispatch]
  );

  const handleSetTotalCountProducts = useCallback(
    (price: number, count: number) => {
      setTotalCountProducts((previousValue) => ({
        ...previousValue,
        [price]: count,
      }));
    },
    []
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          marginBottom: 50,
          marginTop: 50,
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            fontSize: 24,
            fontWeight: 700,
            borderBottom: `2px solid ${!submit ? "red" : "black"}`,
          }}
        >
          Shipping
        </p>
        <p
          style={{
            fontSize: 24,
            fontWeight: 700,
            borderBottom: `2px solid ${!submit ? "black" : "red"}`,
          }}
        >
          Payment
        </p>
      </div>
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
                  <label>Delivery Provider</label>
                  <Controller
                    control={control}
                    name="deliveryProvider"
                    render={({ field: { onChange, ...field } }) => (
                      <Autocomplete
                        onChange={(_event, newValue) => {
                          onChange(newValue ? newValue : null);
                          console.log(newValue);
                          handleSetShippingFee(newValue);
                        }}
                        {...field}
                        options={deliveryOptions[watch("country")] ?? []}
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
                  <TextField
                    onChange={formatAndSetCcNumber}
                    value={ccNumber}
                    required
                    className="w-full"
                  />
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <label>MM/YY</label>
                    <TextField
                      required
                      type="text"
                      value={expiryFormat(expiryDate)}
                      onChange={handleSetExpiryDate}
                    />
                  </div>
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <label>CVV</label>
                    <TextField
                      required
                      type="password"
                      inputProps={{ maxLength: 3 }}
                    />
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
            {cart?.map(({ product }) => {
              const convertedPrice = `${(
                (rate ?? 1) * product.currentPrice
              ).toFixed(2)} ${currency ?? "EGP"}`;

              return (
                <li
                  key={product.id}
                  className="border-b-black border px-4 py-3 flex flex-row justify-between items-center"
                >
                  <img
                    src={product.previewImageLink}
                    alt="product"
                    width={50}
                    height={50}
                  />
                  <span>{product.productName}</span>
                  <span className="whitespace-nowrap">{convertedPrice}</span>
                  <NumberInput
                    onChange={(_, count) => {
                      handleSetTotalCountProducts(product.currentPrice, count);
                    }}
                    defaultValue={1}
                    min={1}
                  />
                  <DeleteIcon
                    style={{ cursor: "pointer" }}
                    sx={{ fill: "red" }}
                    onClick={() => handleDeleteProductFromCart(product.id)}
                  />
                </li>
              );
            })}
          </ul>
          <div className="bg-[#FDF2E9] flex flex-col justify-center items-center my-20 gap-4 w-[70%]">
            <div className="border-b-2 px-10 w-full py-5 border-[#000000]">
              <span>Shipping: </span>
              <span>
                {((rate ?? 1) * (shippingFee ?? 0)).toFixed(2)}{" "}
                {currency ?? "EGP"}
              </span>
            </div>
            {discount && (
              <div className="border-b-2 px-10 w-full py-5 border-[#000000]">
                <span>Discount: </span>
                <span>{discount}%</span>
              </div>
            )}
            <div className="border-b-2 px-10 w-full py-5 border-[#000000]">
              <span>Total: </span>
              <span>
                {((rate ?? 1) * totalSum).toFixed(2)} {currency ?? "EGP"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
