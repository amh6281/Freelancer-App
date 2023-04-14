import React from "react";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="orders">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "잘못된 접근입니다."
      ) : (
        <div className="container">
          <div className="title">
            <h1>주문</h1>
          </div>
          <table>
            <tr>
              <th>썸네일</th>
              <th>제목</th>
              <th>가격</th>
              <th>연락</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img className="image" src={order.img} alt="" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}원</td>
                <td>
                  <img className="message" src="/img/message.png" alt="" />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
