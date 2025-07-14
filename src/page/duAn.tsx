"use client";
import React, { useState, useEffect, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slide1 from "../assets/images/baner1.png";
import Slide2 from "../assets/images/khu-cong-nghiep.png";
import Slide3 from "../assets/images/baner1.png";
import Slide4 from "../assets/images/khu-cong-nghiep.png";
import Slide5 from "../assets/images/baner1.png";
import Slide6 from "../assets/images/khu-cong-nghiep.png";
import Slide7 from "../assets/images/baner1.png";
import Slide8 from "../assets/images/khu-cong-nghiep.png";
import Slide9 from "../assets/images/baner1.png";

import InfoChiTiet from "../components/DetailDuAn/InfoChiTiet";
import DiemNoiBat from "../components/DetailDuAn/DiemNoiBat";
import PhanKhu from "../components/DetailDuAn/PhanKhu";
import ViTri from "../components/DetailDuAn/ViTri";
import TuVanForm from "../components/DetailDuAn/TuVanForm";
import TienIchCanhQuan from "../components/DetailDuAn/TienIchCanhQuan";
import DanhSachTienIch from "../components/DetailDuAn/DanhSachTienIch";
import FileTaiLieu from "../components/DetailDuAn/FileTaiLieu";
import MatBang3D from "../components/DetailDuAn/MatBang3D";
import DoiTac from "../components/DetailDuAn/DoiTac";
import TinTuc from "../components/DetailDuAn/TinTuc";
import "../styles/duan.css";

export default function DuAn() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const albumRef = useRef<HTMLDivElement | null>(null);

  const images: string[] = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentSlide(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const album = albumRef.current;
    if (!album) return;

    const slideWidth = 210;
    const visibleCount = 6;
    const maxOffset = (images.length - visibleCount) * slideWidth;

    let offset = 0;
    if (currentSlide >= visibleCount) {
      offset = (currentSlide - visibleCount + 1) * slideWidth;
      if (offset > maxOffset) offset = 0;
    }

    album.style.transform = `translateX(-${offset}px)`;
  }, [currentSlide]);

  const cardData = [
    {
      id: 1,
      image: Slide1,
      area: "Khu A",
      project: "Khu biệt thự cao cấp",
      style: "Cổ điển",
      type: "Biệt thự",
    },
    {
      id: 2,
      image: Slide2,
      area: "Khu B",
      project: "Khu biệt thự cao cấp",
      style: "Hiện đại",
      type: "Biệt thự",
    },
    {
      id: 3,
      image: Slide3,
      area: "Khu C",
      project: "Khu biệt thự cao cấp",
      style: "Tân cổ điển",
      type: "Biệt thự",
    },
  ];

  return (
    <div className="home-page">
      <div className="slider-container">
        <div className="slider">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="slider-image"
          />
          <div className="top-left-text">
            Trang chủ / Khu biệt thự cao cấp Cocoland
            <br />
            <a href="/" className="back-link">&lt; Về trang chủ</a>
          </div>
          <div className="bottom-left-text">
            <h3>Khu biệt thự cao cấp Cocoland</h3>
            <p>Khu Công nghiệp và Đô thị Mỹ Phước III</p>
          </div>
        </div>
      </div>

      <div className="album-controls">
        <button onClick={goToPrevSlide} className="control-btn">
          <LeftOutlined />
        </button>

        <div className="album">
          <div className="album-inner" ref={albumRef}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={index === currentSlide ? "active" : ""}
                onClick={() => handleImageClick(img, index)}
              />
            ))}
          </div>
        </div>

        <button onClick={goToNextSlide} className="control-btn">
          <RightOutlined />
        </button>

        <div className="image-count-overlay" onClick={toggleDropdown}>
          +{images.length} ảnh
        </div>

        {isDropdownOpen && (
          <div className="dropdown-content">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Dropdown ${index + 1}`}
                className="dropdown-image"
                onClick={() => handleImageClick(image, index)}
              />
            ))}
          </div>
        )}
      </div>

      {isFullscreen && selectedImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="fullscreen-image"
          />
          <button className="close-btn" onClick={closeFullscreen}>
            Đóng
          </button>
        </div>
      )}

      <div className="form">
        <div className="left-section">
          <h2>Tổng quan dự án khu biệt thự cao cấp Cocoland</h2>
          <InfoChiTiet />
          <DiemNoiBat />

          <h2>Phân khu của dự án khu biệt thự cao cấp Cocoland</h2>
          <PhanKhu cards={cardData} />

          <h2>Vị trí khu biệt thự cao cấp</h2>
          <ViTri />

          <h2>Tiện ích cảnh quan</h2>
          <TienIchCanhQuan />

          <h4>Danh sách tiện ích</h4>
          <DanhSachTienIch />

          <h2>Tài liệu biệt thự cao cấp Cocoland</h2>
          <FileTaiLieu />

          <div className="title-with-legend">
            <h2>Tổng mặt bằng biệt thự cao cấp Cocoland</h2>
            <div className="legend">
              <div className="legend-item">
                <span className="color-box dang-ban"></span> Đang bán
              </div>
              <div className="legend-item">
                <span className="color-box da-ban"></span> Đã bán
              </div>
              <div className="legend-item">
                <span className="color-box chua-mo-ban"></span> Chưa mở bán
              </div>
              <div className="legend-item">
                <span className="color-box giu-cho"></span> Giữ chỗ
              </div>
            </div>
          </div>

        </div>

        <div className="right-section">
          <TuVanForm />
        </div>
      </div>
      <div className="info-form">
        <div className="matbang3d-section">
          <MatBang3D />
          <DoiTac />
          <TinTuc />
        </div>
      </div>
    </div>
  );
}