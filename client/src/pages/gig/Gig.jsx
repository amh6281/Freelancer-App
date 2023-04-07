import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";

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
            <div className="reviews">
              <h2>리뷰</h2>
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>이철수</span>
                    <div className="country">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                      />
                      <span>대한민국</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  AI 이미지가 필요하여 구매하였습니다. 요구사항을 말씀드리니
                  그것에 맞게 알아서 작업해주셨습니다! 다른 분들에게 꼭 추천해
                  드리고 싶습니다! 다른 그림이 필요할 때 한 번 더
                  맡겨야겠습니다!
                </p>
                <div className="helpful">
                  <span>도움이 되셨나요?</span>
                  <img src="/img/like.png" alt="" />
                  <span>네</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>아니오</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>이철수</span>
                    <div className="country">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                      />
                      <span>대한민국</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  AI 이미지가 필요하여 구매하였습니다. 요구사항을 말씀드리니
                  그것에 맞게 알아서 작업해주셨습니다! 다른 분들에게 꼭 추천해
                  드리고 싶습니다! 다른 그림이 필요할 때 한 번 더
                  맡겨야겠습니다!
                </p>
                <div className="helpful">
                  <span>도움이 되셨나요?</span>
                  <img src="/img/like.png" alt="" />
                  <span>네</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>아니오</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>이철수</span>
                    <div className="country">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                      />
                      <span>대한민국</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  AI 이미지가 필요하여 구매하였습니다. 요구사항을 말씀드리니
                  그것에 맞게 알아서 작업해주셨습니다! 다른 분들에게 꼭 추천해
                  드리고 싶습니다! 다른 그림이 필요할 때 한 번 더
                  맡겨야겠습니다!
                </p>
                <div className="helpful">
                  <span>도움이 되셨나요?</span>
                  <img src="/img/like.png" alt="" />
                  <span>네</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>아니오</span>
                </div>
              </div>
            </div>
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
            <button>구매하기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
