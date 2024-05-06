import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Category, CategoryFormData } from "../store/types";
import AddCategoryForm from "./AddCategoryForm";
import AddDialog from "./AddDialog";

interface Props {
  categories?: Category[];
  onSubmit: SubmitHandler<CategoryFormData>;
  onDelete: (category: Category) => void;
  onEdit: (category: Category) => void;
}

const AdminCategory: React.FC<Props> = ({
  categories,
  onSubmit: handleCreateCategory,
  onDelete: handleDeleteCategory,
  onEdit: handleEditCategory,
}) => {
  const [addCat, setAddCat] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState<number | null>(null);
  const [editableName, setEditableName] = useState("");
  const [editablePhotoLink, setEditablePhotoLink] = useState("");

  const handleEdit = (category: Category) => {
    setEditCategoryId(category.id);
    setEditableName(category.categoryName);
    setEditablePhotoLink(category.previewImageLink);
  };

  const handleClickOpen = () => {
    setAddCat(true);
  };

  const handleClose = () => {
    setAddCat(false);
  };

  const handleSubmitAddCat = (values: CategoryFormData) => {
    handleCreateCategory(values);
    handleClose();
  };

  const handleSave = () => {
    if (
      editablePhotoLink != null &&
      editableName != null &&
      editCategoryId != null
    ) {
      handleEditCategory({
        id: editCategoryId,
        categoryName: editableName,
        previewImageLink: editablePhotoLink,
      });
      setEditCategoryId(null);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                Preview Photo
              </th>
              <th scope="col" className="flex justify-center py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories != null &&
              categories?.map((category) => (
                <tr
                  key={category.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {editCategoryId === category.id ? (
                      <input
                        type="text"
                        value={editableName}
                        className="placeholder:text-black text-black px-2 py-1 rounded-full"
                        onChange={(e) => setEditableName(e.target.value)}
                      />
                    ) : (
                      category.categoryName
                    )}
                  </th>
                  <td className="px-6 py-4 truncate max-w-14">
                    {editCategoryId === category.id ? (
                      <input
                        type="text"
                        className="placeholder:text-black text-black px-2 py-1 rounded-full"
                        value={editablePhotoLink}
                        onChange={(e) => setEditablePhotoLink(e.target.value)}
                      />
                    ) : (
                      <p>{category.previewImageLink}</p>
                    )}
                  </td>
                  <td className="flex flex-row justify-center items-center gap-5 py-3">
                    {editCategoryId === category.id ? (
                      <button
                        onClick={() => handleSave()}
                        className="font-medium text-green-600 dark:text-green-500 hover:underline"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(category)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category)}
                          className="font-medium text-red-800 dark:text-red-700 hover:underline"
                        >
                          Remove
                        </button>
                      </>
                    )}
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
        <AddCategoryForm onSubmit={handleSubmitAddCat} onClose={handleClose} />
      </AddDialog>
    </>
  );
};

export default AdminCategory;
