"use client";
import React, { useRef, useState } from "react";
import Slide1 from "../assets/images/baner1.png";
import Slide2 from "../assets/images/khu-cong-nghiep.png";
import Slide3 from "../assets/images/baner1.png";
import Slide4 from "../assets/images/khu-cong-nghiep.png";
import Slide5 from "../assets/images/baner1.png";
import Slide6 from "../assets/images/khu-cong-nghiep.png";
import Slide7 from "../assets/images/baner1.png";
import Slide8 from "../assets/images/khu-cong-nghiep.png";
import Slide9 from "../assets/images/baner1.png";

import "../styles/phankhu.css";
import SliderWithAlbum from "../components/DetailPhanKhu/SlideAlbumPhanKhu";
import DiemNoiBatPhanKhu from "../components/DetailPhanKhu/DiemNoiBatPhanKhu";
import InfoChiTietPhanKhu from "../components/DetailPhanKhu/InfoChiTietPhanKhu";
import TuVanFormPhanKhu from "../components/DetailPhanKhu/TuVanPhanKhu";
import PhanKhuA from "../components/DetailPhanKhu/PhanKhuA";
import Reviews from "../components/DetailPhanKhu/DanhGiaPhanKhu";
import ViTriPhanKhu from "../components/DetailPhanKhu/ViTriPhanKhu";
import TienIchCanhQuanPhanKhu from "../components/DetailPhanKhu/TienIchCanhQuanPhanKhu";
import DanhSachTienIch from "../components/DetailDuAn/DanhSachTienIch";
import MatBang3DPhanKhu from "../components/DetailPhanKhu/MatBang3DPhanKhu";
import PriceTable from "../components/DetailPhanKhu/PricePhanKhu";
import TinTucPhanKhu from "../components/DetailPhanKhu/TinTucPhanKhu";

const images: string[] = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];

const duLieuPhanKhuA = [
  {
    id: 1,
    image: Slide1,
    area: "Shop house",
    acreage: "100,00-140,00 m",
    price: "Từ 17,2 tỷ - 20 tỷ",
    type: "Biệt thự",
  },
  {
    id: 2,
    image: Slide1,
    area: "Shop house",
    acreage: "100,00-140,00 m",
    price: "Từ 17,2 tỷ - 20 tỷ",
    type: "Biệt thự",
  },
  {
    id: 3,
    image: Slide1,
    area: "Shop house",
    acreage: "100,00-140,00 m",
    price: "Từ 17,2 tỷ - 20 tỷ",
    type: "Biệt thự",
  },
];

export default function PhanKhu() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const albumRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentSlide(index);
    setIsFullscreen(true);
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SliderWithAlbum
        images={images}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        handleImageClick={handleImageClick}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        albumRef={albumRef}
        title="Phân khu dự án Cocoland"
        subtitle="Khu đô thị và công nghiệp hiện đại"
      />

      {isFullscreen && selectedImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Hình phóng to" className="fullscreen-image" />
            <button className="close-btn" onClick={closeFullscreen}>
              Đóng
            </button>
          </div>
        </div>
      )}

      <div className="form">
        <div className="left-section">
          <h2>Thông tin chi tiết</h2>
          <InfoChiTietPhanKhu />
          <DiemNoiBatPhanKhu />
          <h2>Loại hình của phân khu A</h2>
          <PhanKhuA cards={duLieuPhanKhuA} />
          <h2>Đánh giá tiêu biểu</h2>
          <Reviews />
          <h2>Vị Trí Phân Khu A</h2>
          <ViTriPhanKhu />
          <h2>Tiện ích cảnh quan</h2>
          <TienIchCanhQuanPhanKhu />
          <h2>Phân khu A - Không gian sống “biệt thự” đẳng cấp</h2>
          <DanhSachTienIch />
        </div>

        <div className="right-section">
          <TuVanFormPhanKhu />
        </div>
      </div>

      <div className="title-with-legend">
        <h2>Tổng mặt bằng biệt thự cao cấp Cocoland</h2>
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

      <MatBang3DPhanKhu />
      <PriceTable />
      <TinTucPhanKhu />
    </>
  );
}
