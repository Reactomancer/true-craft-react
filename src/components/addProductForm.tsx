import { useState } from "react";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { MouseEventHandler, FC } from "react";
import { ProductFormData } from "../store/types";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

interface AddProductFormProps {
  onSubmit: SubmitHandler<ProductFormData>;
  onClose: MouseEventHandler;
}

const AddProductForm: FC<AddProductFormProps> = ({
  onSubmit,
  onClose: handleClose,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProductFormData>();

  const [isDiscounted, setIsDiscounted] = useState(false);

  const top100Films = [{ label: "The Shawshank Redemption", id: 4 }];

  const firstPrice = parseFloat(watch("firstPrice"));
  const discount = watch("discount");

  if (isDiscounted && !isNaN(firstPrice) && !isNaN(discount)) {
    const discountedPrice = (firstPrice - firstPrice * (discount / 100))
      .toFixed(2)
      .toString();
    setValue("currentPrice", discountedPrice);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
              borderColor: "white", // Focus border color
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
              borderColor: "white", // Focus border color
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
              borderColor: "white", // Focus border color
            },
          },
        }}
        required
        {...register("firstPrice", { required: true })}
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
                  borderColor: "white", // Focus border color
                },
              },
            }}
            {...register("discount", { required: true })}
            type="number"
            label="Discount (%)"
          />
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
                  borderColor: "white", // Focus border color
                },
              },
            }}
            {...register("currentPrice")}
          />
        </>
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
              borderColor: "white", // Focus border color
            },
          },
        }}
        required
        {...register("previewImageLink", { required: true })}
        label="Preview Image Link"
      />

      <Autocomplete
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
              borderColor: "white", // Focus border color
            },
          },
        }}
        required
        {...register("categoryId", { required: true })}
        options={top100Films}
        className="placeholder:text-black text-black py-1 rounded-full"
        renderInput={(params) => (
          <TextField {...params} label="Choose a category" />
        )}
      />

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
        {...register("characteristics", { required: true })}
        label="Characteristics"
      />

      <div className="flex flex-row justify-end">
        <Button type="submit">Submit</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </div>
    </form>
  );
};

export default AddProductForm;
