import React from "react";
import "./Reviews.scss";
import Review from "../review/Review";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="reviews">
      <h2>리뷰</h2>
      {isLoading
        ? "loading..."
        : error
        ? "잘못된 접근입니다."
        : data.map((review) => <Review key={review._id} review={review} />)}
    </div>
  );
};

export default Reviews;
