import React from "react";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Product, ProductFormData } from "../store/types";
import AddDialog from "./AddDialog";
import AddProductForm from "./addProductForm";

interface Props {
  products?: Product[];
  onCreate: SubmitHandler<ProductFormData>;
  onDelete: (product: Product) => void;
  onEdit: (product: Product) => void;
}

const AdminProduct: React.FC<Props> = ({
  products,
  onCreate: handleAddProduct,
  onDelete: handleDeleteProduct,
  onEdit: handleEditProduct,
}) => {
  const [addCat, setAddCat] = useState(false);
  const [editProductId, setEditProductId] = useState<number | null>(null);
  const [editableName, setEditableName] = useState("");
  const [editablePhotoLink, setEditablePhotoLink] = useState("");

  const handleEdit = (product: Product) => {
    setEditProductId(product.id);
    setEditableName(product.productName);
    setEditablePhotoLink(product.previewImageLink);
    setAddCat(true);
  };

  const handleClickOpen = () => {
    setAddCat(true);
  };

  const handleClose = () => {
    setAddCat(false);
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                First Price
              </th>
              {products?.some((product) => product.discount > 0) && (
                <>
                  <th scope="col" className="px-6 py-3">
                    Current Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount
                  </th>
                </>
              )}
              <th scope="col" className="px-6 py-3">
                Preview Image
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Category ID
              </th>
              <th scope="col" className="px-6 py-3">
                Characteristics
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">{product.productName}</td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.firstPrice}</td>
                {product.discount > 0 && (
                  <>
                    <td className="px-6 py-4">{product.currentPrice}</td>
                    <td className="px-6 py-4">{product.discount}%</td>
                  </>
                )}
                <td className="px-6 py-4">
                  <img
                    src={product.previewImageLink}
                    alt="Preview"
                    className="w-10 h-10"
                  />
                </td>
                <td className="px-6 py-4">{product.rating}/5</td>
                <td className="px-6 py-4">{product.categoryId}</td>
                <td className="px-6 py-4">
                  {product.characteristics?.join("")}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product)}
                    className="font-medium text-red-800 dark:text-red-700 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {!addCat && (
          <button
            onClick={handleClickOpen}
            className="px-7 py-3 m-6 bg-blue-900 inline-block shadow-md rounded-full"
          >
            Add Category
          </button>
        )}
      </div>
      <AddDialog onClose={handleClose} open={addCat}>
        <div className="flex flex-row"></div>
        <AddProductForm onSubmit={handleAddProduct} onClose={handleClose} />
      </AddDialog>
    </>
  );
};

export default AdminProduct;
