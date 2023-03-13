import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>메시지</h1>
        </div>
        <table>
          <tr>
            <th>구매자</th>
            <th>마지막 메시지</th>
            <th>날짜</th>
            <th>상태</th>
          </tr>
          <tr className="active">
            <td>홍길동</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>하루 전</td>
            <td>
              <button>새 메시지</button>
            </td>
          </tr>
          <tr className="active">
            <td>홍길동</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>하루 전</td>
            <td>
              <button>새 메시지</button>
            </td>
          </tr>
          <tr>
            <td>홍길동</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>하루 전</td>
          </tr>
          <tr>
            <td>홍길동</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>하루 전</td>
          </tr>
          <tr>
            <td>홍길동</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>하루 전</td>
          </tr>
          <tr>
            <td>홍길동</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>하루 전</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
