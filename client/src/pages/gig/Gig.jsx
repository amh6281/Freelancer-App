import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId, //userId가 존재할 경우에만 쿼리 요청
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "잘못된 접근입니다."
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadCrumbs">Freelancer &gt; {data.cat} &gt;</span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading..."
            ) : errorUser ? (
              "잘못된 접근입니다."
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "/img/noavatar.jpg"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>
            <h2>작품 소개</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              "loading..."
            ) : errorUser ? (
              "잘못된 접근입니다."
            ) : (
              <div className="seller">
                <h2>프리랜서 소개</h2>
                <div className="user">
                  <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>문의하기</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">국적</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">활동 기간</span>
                      <span className="desc">2022.08</span>
                    </div>
                    <div className="item">
                      <span className="title">평균 제작 시간</span>
                      <span className="desc">4시간</span>
                    </div>
                    <div className="item">
                      <span className="title">최근 의뢰</span>
                      <span className="desc">하루 전</span>
                    </div>
                    <div className="item">
                      <span className="title">언어</span>
                      <span className="desc">한국어</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>{data.price} ₩</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryTime}시간 소요 예상</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber}번 수정 가능</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
              <button>구매하기</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
