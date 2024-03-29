import React, { useReducer, useState } from "react";
import "./MyGig.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { INITIAL_STATE, gigReducer } from "../../reducers/gigReducer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const MyGig = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

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

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  // useMutation은 데이터를 생성/업데이트/삭제
  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.put(`/gigs/${gig._id}`, gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]); // useQueryClient를 사용하여 gig 생성시 결과 전달
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs");
  };

  return (
    <div className="myGig">
      <div className="container">
        <h1>프로젝트 업데이트</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">제목</label>
            <input
              type="text"
              name="title"
              placeholder={gig.title}
              onChange={handleChange}
            />
            <label htmlFor="">카테고리</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option selected>-- {gig.cat} --</option>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">커버 이미지</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">업로드 이미지</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "업로딩..." : "업로드"}
              </button>
            </div>
            <label htmlFor="">설명</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="16"
              placeholder={gig.desc}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>생성</button>
          </div>
          <div className="right">
            <label htmlFor="">서비스 제목</label>
            <input
              type="text"
              name="shortTitle"
              placeholder={gig.shortTitle}
              onChange={handleChange}
            />
            <label htmlFor="">짧은 설명</label>
            <textarea
              name="shortDesc"
              id=""
              placeholder={gig.shortDesc}
              cols="30"
              rows="10"
              onChange={handleChange}
            />
            <label htmlFor="">소요 시간 (일)</label>
            <input
              type="number"
              name="deliveryTime"
              placeholder={gig.deliveryTime}
              onChange={handleChange}
            />
            <label htmlFor="">수정 가능 횟수</label>
            <input
              type="number"
              name="revisionNumber"
              placeholder={gig.revisionNumber}
              onChange={handleChange}
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
            <input
              type="number"
              name="price"
              placeholder={gig.price}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGig;
