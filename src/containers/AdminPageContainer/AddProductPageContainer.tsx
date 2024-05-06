import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import AdminProduct from "../../components/AdminProduct";
import { productsSelector } from "../../store/products/selectors";
import { Product, ProductFormData } from "../../store/types";
import {
  createProduct,
  deleteProduct,
  editProduct,
} from "../../store/products/action";

const AddProductPageContainer: React.FC = () => {
  const navigate = useNavigate();
  const products = useAppSelector(productsSelector);
  const dispatch = useAppDispatch();

  const handleAddProduct = (params: ProductFormData) => {
    dispatch(createProduct(params));
  };

  const handleDeleteProduct = (params: Product) => {
    dispatch(deleteProduct(params.id));
  };

  const handleEditProduct = (params: Product) => {
    dispatch(editProduct(params));
  };

  return (
    <div className="flex flex-row min-h-screen text-white">
      <aside className="flex flex-col bg-[#434343] min-w-60 items-center pt-12 gap-20">
        <h1 className="mb-5 text-2xl">TrueCraft Admin</h1>
        <button
          onClick={() => navigate("/admin/dashboard/products")}
          className="border rounded-full px-5 py-3 hover:bg-[rgb(137,136,136)] active:bg-[rgb(180,180,180)]"
        >
          Products
        </button>
        <button
          onClick={() => navigate("/admin/dashboard/categories")}
          className="border rounded-full px-5 py-3 hover:bg-[rgb(137,136,136)] active:bg-[rgb(180,180,180)]"
        >
          Categories
        </button>
      </aside>
      <main className="flex flex-col bg-[#383232] w-full py-14 px-10">
        <AdminProduct
          products={products}
          onCreate={handleAddProduct}
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
      </main>
    </div>
  );
};

export default AddProductPageContainer;
