/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { MouseEventHandler, FC } from "react";
import { Category, Product } from "../store/types";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAppSelector } from "../store/hooks";
import { categoriesSelector } from "../store/categories/selectors";

interface AddProductFormProps {
  onSubmit: SubmitHandler<Product>;
  onClose: MouseEventHandler;
  initialData?: Product;
}

const AddProductForm: FC<AddProductFormProps> = ({
  onSubmit,
  initialData,
  onClose: handleClose,
}) => {
  const categories = useAppSelector(categoriesSelector);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: initialData
      ? {
          productName: initialData.productName,
          description: initialData.description,
          firstPrice: initialData.firstPrice,
          currentPrice: initialData.currentPrice,
          discount: initialData.discount,
          previewImageLink: initialData.previewImageLink,
          rating: initialData.rating,
          categoryId: initialData.categoryId,
          characteristics: initialData.characteristics || [
            { key: "", value: "" },
          ],
        }
      : {
          characteristics: [{ key: "", value: "" }],
        },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "characteristics",
  });

  const [isDiscounted, setIsDiscounted] = useState(false);

  const updatePrice = useCallback(() => {
    const firstPrice = Number(watch("firstPrice"));
    const discount = Number(watch("discount"));

    if (!isNaN(firstPrice) && discount) {
      const finalPrice = firstPrice - firstPrice * (discount / 100);
      setValue("currentPrice", finalPrice);
      return;
    }

    setValue("currentPrice", firstPrice);
  }, [watch, setValue]);

  useEffect(() => {
    updatePrice();
  }, [updatePrice, watch("firstPrice"), watch("discount"), isDiscounted]);

  const onSubmitForm = (data: Product) => {
    if (initialData) {
      onSubmit({ ...initialData, ...data });
    } else {
      onSubmit(data);
    }
    handleClose({} as React.MouseEvent<HTMLButtonElement>);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="flex flex-col gap-4 text-white pt-4"
    >
      <TextField
        required
        {...register("productName", { required: true })}
        label="Product Name"
        sx={{
          "& label": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
      />
      {errors.productName && (
        <span className="text-red-500">This field is required</span>
      )}

      <TextField
        sx={{
          "& label": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        required
        {...register("description", { required: true })}
        label="Description"
      />
      {errors.description && (
        <span className="text-red-500">This field is required</span>
      )}

      <TextField
        sx={{
          "& label": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        required
        {...register("firstPrice", { required: true, valueAsNumber: true })}
        type="number"
        label="Price"
      />
      {errors.firstPrice && (
        <span className="text-red-500">This field is required</span>
      )}

      <label className="text-white flex flex-row gap-2">
        <input
          type="checkbox"
          checked={isDiscounted}
          onChange={(e) => setIsDiscounted(e.target.checked)}
        />
        Apply Discount
      </label>

      {isDiscounted && (
        <>
          <TextField
            {...register("discount", { required: true, valueAsNumber: true })}
            type="number"
            label="Discount (%)"
            sx={textFieldStyles}
          />
        </>
      )}

      <TextField
        sx={textFieldStyles}
        required
        {...register("previewImageLink", { required: true })}
        label="Preview Image Link"
      />

      <Controller
        name="categoryId"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Autocomplete
            sx={textFieldStyles}
            options={categories as Category[]}
            getOptionLabel={(option) => option.categoryName}
            value={
              categories?.find((category) => category.id === value) || null
            }
            onChange={(_event, newValue) => {
              onChange(newValue ? newValue.id : null);
            }}
            onBlur={onBlur}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a category"
                required
                inputRef={ref}
              />
            )}
          />
        )}
      />

      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <TextField
            sx={textFieldStyles}
            {...register(`characteristics.${index}.key`, { required: true })}
            label="Key"
            required
          />
          <TextField
            sx={textFieldStyles}
            {...register(`characteristics.${index}.value`, { required: true })}
            label="Value"
            required
          />
          <Button variant="contained" onClick={() => remove(index)}>
            delete
          </Button>
        </div>
      ))}
      <Button
        onClick={() => append({ key: "", value: "" })}
        variant="contained"
      >
        Add Characteristic
      </Button>

      <div className="flex flex-row justify-end">
        <Button variant="contained" sx={{ marginRight: 5 }} type="submit">
          Submit
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

const textFieldStyles = {
  "& label": {
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
};

export default AddProductForm;
