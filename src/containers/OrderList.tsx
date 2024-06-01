import { FC } from "react";
import { useAppSelector } from "../store/hooks";
import { OrdersListSelector } from "../store/cart/selectors";
import { UserData } from "../store/users/types";
import {
  conversionSelector,
  currencySelector,
} from "../store/products/selectors";

interface Props {
  user?: UserData;
}

export const OrdersList: FC<Props> = ({ user }) => {
  const orders = useAppSelector(OrdersListSelector);
  const rate = useAppSelector(conversionSelector);
  const currency = useAppSelector(currencySelector);

  const formattedDate = function (date: string) {
    const formattedDate = new Date(date);
    return `${formattedDate.getDate()}.${
      formattedDate.getMonth() + 1
    }.${formattedDate.getFullYear()}`;
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created at
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Delivery Date
                    </th>
                  </tr>
                </thead>
                {orders?.orders?.length ? (
                  orders?.orders.map((order) => {
                    const orderCreatedDate = new Date(order.createdAt);
                    const daysDifference = Math.round(
                      (orderCreatedDate.getTime() +
                        14 * 24 * 60 * 60 * 1000 -
                        Date.now()) /
                        (1000 * 3600 * 24)
                    );

                    const convertedCurrentPrice = `${(
                      (rate ?? 1) * order.total
                    ).toFixed(2)} ${currency ?? "EGP"}`;

                    const randomNumber = Math.floor(
                      1000 + Math.random() * 9000
                    );

                    return (
                      <tbody key={order.id}>
                        <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user?.firstName} {user?.lastName}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {randomNumber}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {convertedCurrentPrice}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {order.address}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {formattedDate(order.createdAt)}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Active</span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative ">
                              {daysDifference} days left
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                ) : (
                  <p className="text-2xl text-center font-bold p-4">
                    no orders
                  </p>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
