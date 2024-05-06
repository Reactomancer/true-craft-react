import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesSelector } from "../../store/categories/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import AdminCategory from "../../components/AdminCategory";
import {
  createCategory,
  deleteCategory,
  editCategory,
} from "../../store/categories/actions";
import { Category, CategoryFormData } from "../../store/types";

const AddCatPageContainer: React.FC = () => {
  const categories = useAppSelector(categoriesSelector);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleCreateCategory = (params: CategoryFormData) => {
    dispatch(createCategory(params));
  };

  const handleDeleteCategory = (params: Category) => {
    dispatch(deleteCategory(params.id));
  };

  const handleEditCategory = (params: Category) => {
    dispatch(editCategory(params));
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
        <AdminCategory
          onSubmit={handleCreateCategory}
          categories={categories}
          onDelete={handleDeleteCategory}
          onEdit={handleEditCategory}
        />
      </main>
    </div>
  );
};

export default AddCatPageContainer;
