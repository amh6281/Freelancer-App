import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            Freelancer &gt; Graphic & Design &gt;
          </span>
          <h1>AI 기반의 그림을 만들어드립니다!</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Kim soojin</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>작품 소개</h2>
          <p>
            AI 프로그램을 사용하여 그림을 만들어 드립니다. 제가 만들어 드릴 수
            있는 기능은 캐릭터 초상화(예 : D&D 캐릭터), 풍경(예 : 배경 화면,
            일러스트레이션), 로고(예 : E-Sports) 만들어 드리는 이미지는 모두
            원본이며, 성심성의껏 제작해드리겠습니다.
          </p>
          <div className="seller">
            <h2>프리랜서 소개</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Kim soojin</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>문의하기</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">국적</span>
                  <span className="desc">대한민국</span>
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
              <p>
                안녕하세요! AI 아티스트 김수진입니다! 저는 여가시간에 AI 아트를
                만드는 것을 좋아합니다! AI 프로그램 경험이 풍부하여 결과물이
                마음에 들 것이라 확신할 수 있습니다.
              </p>
            </div>
          </div>
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
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
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
                드리고 싶습니다! 다른 그림이 필요할 때 한 번 더 맡겨야겠습니다!
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
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
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
                드리고 싶습니다! 다른 그림이 필요할 때 한 번 더 맡겨야겠습니다!
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
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
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
                드리고 싶습니다! 다른 그림이 필요할 때 한 번 더 맡겨야겠습니다!
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
            <h3>1 AI 이미지</h3>
            <h2>29,000₩</h2>
          </div>
          <p>
            AI 프로그램을 사용하여 그림을 만들어 드립니다. 제가 만들어 드릴 수
            있는 기능은 캐릭터 초상화(예 : D&D 캐릭터), 풍경(예 : 배경 화면,
            일러스트레이션), 로고(예 : E-Sports) 만들어 드리는 이미지는 모두
            원본이며, 성심성의껏 제작해드리겠습니다.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>4시간 소요 예상</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>리뷰 3개</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>원본파일 제공</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>맞춤 디자인 제공</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>상표등록 가능여부</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>고해상도 파일 제공</span>
            </div>
          </div>
          <button>구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
