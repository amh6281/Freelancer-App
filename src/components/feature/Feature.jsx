import React from "react";
import "./Feature.scss";

const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="container">
          <div className="item">
            <h1>지금 필요한 프리랜서를 지금 당장 만나보세요!</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              최적의 가격 & 최고의 서비스
            </div>
            <p>
              다양한 가격대에서 고품질 서비스를 골라보세요. 프로젝트 기반 가격
              책정.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              안전한 결제
            </div>
            <p>작업을 승인할 때까지 결제가 되지 않습니다.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              신속한 작업
            </div>
            <p>정해진 기한 내 완벽하게 작업할 프리랜서가 모여있습니다.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              연중무휴 지원
            </div>
            <p>24시간 언제 어디서나 도움을 드릴 수 있습니다.</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>

      <div className="feature dark">
        <div className="container">
          <div className="item">
            <h1>
              Freelancer <i>BusIness</i>
            </h1>
            <h1>
              <i>기업을</i> 위해 설계된 비즈니스 솔루션
            </h1>
            <p>다양한 혜택이 제공하는 Freelancer입니다.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              실력이 입증된 프리랜서와 연결
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              관리자를 통해 완벽한 인재를 연결해드립니다.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              기업의 생산성을 높일 수 있습니다.
            </div>
            <button>Freelancer 살펴보기</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
