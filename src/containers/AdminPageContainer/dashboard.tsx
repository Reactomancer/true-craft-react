import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
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
      <main className="flex flex-col bg-[#383232] min-w-full justify-center items-center">
        <p className="text-4xl">Welcome Back, Mosaad</p>
      </main>
    </div>
  );
};

export default DashboardPage;
