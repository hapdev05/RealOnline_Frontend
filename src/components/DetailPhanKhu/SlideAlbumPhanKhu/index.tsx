"use client";
import React, { useEffect, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Props {
  images: string[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  handleImageClick: (image: string, index: number) => void;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  albumRef: React.RefObject<HTMLDivElement | null>;
  title: string;
  subtitle: string;
}

export default function SliderWithAlbum({
  images,
  currentSlide,
  setCurrentSlide,
  handleImageClick,
  isDropdownOpen,
  toggleDropdown,
  albumRef,
  title,
  subtitle,
}: Props) {
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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

  return (
    <>
      <div className="slider-container">
        <div className="slider">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="slider-image"
          />
          <div className="top-left-text">
            Trang chủ / {title}
            <br />
            <a href="/" className="back-link">&lt; Về trang chủ</a>
          </div>
          <div className="bottom-left-text">
            <h3>{title}</h3>
            <p>{subtitle}</p>
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
    </>
  );
}
