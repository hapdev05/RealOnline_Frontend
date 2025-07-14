"use client";
import React, { useState, useEffect } from "react";
import Slide1 from "../../../assets/images/baner1.png";
import Slide2 from "../../../assets/images/khu-cong-nghiep.png";
import Slide3 from "../../../assets/images/baner1.png";
import './style.css'
const TinTucPhanKhu = () => {
  const [currentLarge, setCurrentLarge] = useState(0);
  const [currentSmall1, setCurrentSmall1] = useState(0);
  const [currentSmall2, setCurrentSmall2] = useState(1);
  const images = [Slide1, Slide2, Slide3];



  const currentDate = new Date().toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Ho_Chi_Minh",
  });

  return (
    <div className="tintuc-page">
  <h2 style={{fontSize : '2.5rem ' ,fontWeight :'bold' }}>Tin Tức</h2>

    <div className="tintuc-container">

  <div className="left-section">
    <p>Thông tin ưu đãi</p>
    <div className="slide-large">
      <img src={images[currentLarge]} alt="Slide lớn" className="slide-image" />
    </div>
    <div className="slide-info">
      <h3>Tiêu đề tin lớn</h3>
      <p>Nội dung ngắn gọn tóm tắt tin tức chính</p>
      <p className="date">Ngày đăng: 08/07/2025 14:00</p>
    </div>
  </div>

  <div className="right-section">
    <div className="slide-small-wrapper">
      <div className="slide-small">
        <img src={images[currentSmall1]} alt="Slide nhỏ 1" className="slide-image" />
        <div className="slide-info">
          <h3>Tiêu đề tin 1</h3>
          <p className="date">08/07/2025 14:00</p>
        </div>
      </div>
      <div className="slide-small">
        <img src={images[currentSmall2]} alt="Slide nhỏ 2" className="slide-image" />
        <div className="slide-info">
          <h3>Tiêu đề tin 2</h3>
          <p className="date">08/07/2025 14:00</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default TinTucPhanKhu;
