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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="reviews">
      <h2>리뷰</h2>
      {isLoading
        ? "loading..."
        : error
        ? "잘못된 접근입니다."
        : data.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3>리뷰 추가</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="리뷰를 작성해주세요." />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>추가</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
