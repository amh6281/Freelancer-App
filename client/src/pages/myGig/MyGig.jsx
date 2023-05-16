import React, { useReducer } from "react";
import "./MyGig.scss";
import { useLocation } from "react-router-dom";
import { INITIAL_STATE, gigReducer } from "../../reducers/gigReducer";

const MyGig = () => {
  const location = useLocation();
  const gig = location.state;

  const [state, dispatch] = useReducer(gigReducer, gig);

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="myGig">
      <div className="container">
        <h1>프로젝트 업데이트</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">제목</label>
            <input type="text" name="title" placeholder={gig.title} />
            <label htmlFor="">카테고리</label>
            <select name="cat" id="cat">
              <option selected>-- {gig.cat} --</option>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">커버 이미지</label>
                <input type="file" />
                <label htmlFor="">업로드 이미지</label>
                <input type="file" multiple />
              </div>
              <button>생성</button>
            </div>
            <label htmlFor="">설명</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="16"
              placeholder={gig.desc}
            />
            <button>생성</button>
          </div>
          <div className="right">
            <label htmlFor="">서비스 제목</label>
            <input type="text" name="shortTitle" placeholder={gig.shortTitle} />
            <label htmlFor="">짧은 설명</label>
            <textarea
              name="shortDesc"
              id=""
              placeholder={gig.shortDesc}
              cols="30"
              rows="10"
            />
            <label htmlFor="">소요 시간 (일)</label>
            <input
              type="number"
              name="deliveryTime"
              placeholder={gig.deliveryTime}
            />
            <label htmlFor="">수정 가능 횟수</label>
            <input
              type="number"
              name="revisionNumber"
              placeholder={gig.revisionNumber}
            />
            <label htmlFor="">기능 추가</label>
            <form className="add" action="" onSubmit={handleFeature}>
              <input type="text" placeholder="ex) 페이지 디자인" />
              <button type="submit">추가</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">가격</label>
            <input type="number" name="price" placeholder={gig.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGig;
