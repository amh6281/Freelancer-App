import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
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
  console.log(files);
  return (
    <div className="add">
      <div className="container">
        <h1>새 프로젝트 추가</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">제목</label>
            <input type="text" name="title" onChange={handleChange} />
            <label htmlFor="">카테고리</label>
            <select name="cat" id="cat" onChange={handleChange}>
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
              <button>{uploading ? "uploading..." : "Upload"}</button>
            </div>
            <label htmlFor="">설명</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="16"
              placeholder="고객에게 서비스를 소개하기 위한 설명"
              onChange={handleChange}
            />
            <button>생성</button>
          </div>
          <div className="right">
            <label htmlFor="">서비스 제목</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="ex) 웹 디자인 1페이지"
              onChange={handleChange}
            />
            <label htmlFor="">짧은 설명</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="고객을 위한 짧은 서비스 설명"
              cols="30"
              rows="10"
            />
            <label htmlFor="">소요 시간 ex) 3일 </label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">수정 가능 횟수</label>
            <input
              type="number"
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">기능 추가</label>
            <form action="" onSubmit={handleFeature}>
              <input type="text" placeholder="ex) 페이지 디자인" />
              <button type="submit">추가</button>
            </form>
            <label htmlFor="">가격</label>
            <input type="number" name="price" onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
