import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { productByIdSelector } from "../store/products/selectors";
import { ProductInfo } from "../components/ProductInfo";
import { RelatedItems } from "../components/RelatedItems";
import { Feedback } from "../components/Feedback";
import { RatingForm } from "../components/RatingForm";
import { AddReviewParams } from "../store/types";
import { addReview } from "../store/products/action";
import { userByIdSelector } from "../store/users/selectors";

export const ProductContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(productByIdSelector);
  const user = useAppSelector(userByIdSelector);

  const handleSubmitReview = useCallback(
    (values: AddReviewParams) => {
      console.log({ values });

      if (product?.id != null) {
        const userName =
          user?.firstName != null && user.lastName != null
            ? `${user.firstName} ${user.lastName}`
            : "Anonymous User";

        const params = {
          isVerified: true,
          productId: product.id,
          userId: user?.id ?? 0,
          userName,
          rating: Number(values.rating),
          reviewText: values.reviewText,
        };

        dispatch(addReview(params));
      }
    },
    [dispatch, product?.id, user?.firstName, user?.id, user?.lastName]
  );

  if (product == null) {
    return null;
  }

  return (
    <div>
      <div className="my-[66px] bg-[#FDF2E9] py-20 flex justify-center text-3xl font-bold">
        {product ? <h1>{product?.productName}</h1> : <p>Loading...</p>}
      </div>
      <ProductInfo product={product} />
      <RelatedItems product={product} />
      {product.reviews?.map((review) => (
        <Feedback key={review.id} review={review} />
      ))}
      <RatingForm
        onSubmit={handleSubmitReview}
        defaultValues={{
          productId: product.id,
          isVerified: true,
          userId: user?.id,
        }}
      />
    </div>
  );
};
