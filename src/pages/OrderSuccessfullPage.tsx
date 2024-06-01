import { FC } from "react";
import { Link } from "react-router-dom";

export const OrderSuccessfulPage: FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="gap-5 pt-14 items-center h-[100vh] text-center"
    >
      <h3 className="text-green-400 font-bold text-2xl">Checkout Successful</h3>
      <p>Your order might take sometime to process</p>
      <p>Check your order status in your profile after about 10 minutes</p>
      <p>
        Incase of any inqueries contact the support at trucraft@onlineshop.com
      </p>
      <Link
        to="/orders"
        className="hover:text-blue-700 hover:border-b-[1px] border-b-blue-700 text-gray-500"
      >
        Go to orders
      </Link>
    </div>
  );
};
