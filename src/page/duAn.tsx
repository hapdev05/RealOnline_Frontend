"use client";
import React from "react";
import Slide1 from "../assets/images/baner1.png";
import Slide2 from "../assets/images/khu-cong-nghiep.png";
import Slide3 from "../assets/images/baner1.png";
import Slide4 from "../assets/images/khu-cong-nghiep.png";
import Slide5 from "../assets/images/baner1.png";
import Slide6 from "../assets/images/khu-cong-nghiep.png";
import Slide7 from "../assets/images/baner1.png";
import Slide8 from "../assets/images/khu-cong-nghiep.png";
import Slide9 from "../assets/images/baner1.png";
import SliderWithAlbumDuAn from "../components/DetailDuAn/SlideUlbumDuAn";
import InfoChiTietDuAn from "../components/DetailDuAn/InfoChiTiet";
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
  const images: string[] = [
    Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9,
  ];

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
    <>
     <SliderWithAlbumDuAn images={images} />
<div className="home-page">

  <div className="form">
    <div className="left-section">
      <h2>Tổng quan dự án khu biệt thự cao cấp Cocoland</h2>
      <InfoChiTietDuAn />
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
    </>
   
  );
}
