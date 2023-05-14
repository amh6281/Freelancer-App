import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MyGigs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const MyGigs = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  const handleUpdate = (id) => {
    navigate(`/update/gig/${id}`);
  };

  return (
    <div className="myGigs">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "잘못된 접근입니다."
      ) : (
        <div className="container">
          <div className="title">
            <h1>프로젝트</h1>
            <Link to="/add">
              <button>새 프로젝트 추가</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>썸네일</th>
              <th>제목</th>
              <th>가격</th>
              <th>판매량</th>
              <th>삭제</th>
              <th>수정</th>
            </tr>
            {data.map((gig) => (
              <tr key={gig._id}>
                <td>
                  <img className="image" src={gig.cover} alt="" />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price}원</td>
                <td>{gig.sales}개</td>
                <td>
                  <img
                    className="delete"
                    src="/img/delete.png"
                    alt=""
                    onClick={() => handleDelete(gig._id)}
                  />
                </td>
                <td>
                  <img
                    className="update"
                    src="/img/search.png"
                    alt=""
                    onClick={() => handleUpdate(gig._id)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGigs;
