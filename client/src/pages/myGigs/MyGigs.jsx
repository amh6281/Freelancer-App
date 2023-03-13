import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

const MyGigs = () => {
  return (
    <div className="myGigs">
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
            <th>상태</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>39,000원</td>
            <td>3개</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>39,000원</td>
            <td>3개</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>39,000원</td>
            <td>3개</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>39,000원</td>
            <td>3개</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>39,000원</td>
            <td>3개</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
