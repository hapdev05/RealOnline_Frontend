import React, { useEffect, useState } from "react";

// Import images
import logoImage from "../../assets/images/Logo.png";
import facebookIcon from "../../assets/images/Icon_fb.png";
import youtubeIcon from "../../assets/images/Icon_ytb.png";
import notificationIcon from "../../assets/images/Icon_noti.png";
import questionIcon from "../../assets/images/icon_question.png";
import colorBgIcon from "../../assets/images/Icon_color_bg.png";
import accountIcon from "../../assets/images/Icon_account.png";
import searchIcon from "../../assets/images/Icon_search.png";
import shopIcon from "../../assets/images/Icon_shop.png";
import trellIcon from "../../assets/images/Icon_trello.png";
import { useNavigate } from "react-router-dom";

const Header_menu = () => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isLoaiHinhDropdownOpen, setIsLoaiHinhDropdownOpen] = useState(false);
  const [isKhoangGiaDropdownOpen, setIsKhoangGiaDropdownOpen] = useState(false);
  const [isDienTichDropdownOpen, setIsDienTichDropdownOpen] = useState(false);
  const [isThemBoLocDropdownOpen, setIsThemBoLocDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const navigate = useNavigate();

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsProjectDropdownOpen(false);
    setIsLoaiHinhDropdownOpen(false);
    setIsKhoangGiaDropdownOpen(false);
    setIsDienTichDropdownOpen(false);
    setIsThemBoLocDropdownOpen(false);
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProjectDropdown: () => void = () => {
    closeAllDropdowns();
    setIsProjectDropdownOpen(!isProjectDropdownOpen);
  };
  
  const toggleLoaiHinhDropdown = () => {
    closeAllDropdowns();
    setIsLoaiHinhDropdownOpen(!isLoaiHinhDropdownOpen);
  };

  const toggleKhoangGiaDropdown = () => {
    closeAllDropdowns();
    setIsKhoangGiaDropdownOpen(!isKhoangGiaDropdownOpen);
  };

  const toggleDienTichDropdown = () => {
    closeAllDropdowns();
    setIsDienTichDropdownOpen(!isDienTichDropdownOpen);
  };

  const toggleThemBoLocDropdown = () => {
    closeAllDropdowns();
    setIsThemBoLocDropdownOpen(!isThemBoLocDropdownOpen);
  };

  const handleSearchClick = () => {
    setIsSearchLoading(true);
    closeAllDropdowns();
    // Small delay to show loading state, then navigate
    setTimeout(() => {
      navigate("/list-bds");
      setIsSearchLoading(false);
    }, 300);
  };

  const handleMobileMenuToggle = () => {
    closeAllDropdowns();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileSearchToggle = () => {
    closeAllDropdowns();
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  return (
    <div className="w-full bg-[#1B3459]">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-4 text-white">
              <span className="flex items-center space-x-1">
                <span>Tải ứng dụng</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-2">
                <span>Kết nối</span>
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
              </span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <span className="flex items-center space-x-1">
                <img
                  src={notificationIcon}
                  alt="Notification"
                  className="w-5 h-5"
                />
                <span>Thông báo</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1">
                <img src={questionIcon} alt="Help" className="w-5 h-5" />
                <span>Hỗ trợ</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1">
                <img src={colorBgIcon} alt="Theme" className="w-5 h-5" />
                <span>Màu nền</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1">
                <img src={accountIcon} alt="Account" className="w-5 h-5" />
                <span className="text-red-400">Đăng ký</span>
                <span>/</span>
                <span>Đăng nhập</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="TDC Logo" className="h-10 lg:h-[68px]" />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <div className="flex">
                <div className="relative dropdown-container">
                  <button
                    onClick={toggleProjectDropdown}
                    className="flex items-center space-x-2 bg-white px-4 py-3 border-r border-gray-300 rounded-l-lg hover:bg-gray-50 focus:outline-none"
                  >
                    <img
                      src={trellIcon}
                      alt="trell"
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">Dự án</span>
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isProjectDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dự án 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dự án 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dự án 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Tìm BĐS theo khu vực hoặc dự án"
                  className="flex-1 px-4 py-3 text-gray-700 bg-white focus:outline-none"
                />
                <button
                  className={`bg-white text-white rounded-r-lg focus:outline-none transition-opacity ${
                    isSearchLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
                  }`}
                  onClick={handleSearchClick}
                  disabled={isSearchLoading}
                >
                  {isSearchLoading ? (
                    <div className="flex items-center justify-center w-[68px] h-[48px]">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#1B3459]"></div>
                    </div>
                  ) : (
                    <img
                      src={searchIcon}
                      alt="Search"
                      className="w-[68px] h-[48px]"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Search Toggle */}
            <button
              onClick={handleMobileSearchToggle}
              className="p-2 text-white hover:text-orange-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile Cart */}
            <button className="relative p-2">
              <img src={shopIcon} alt="Shopping Cart" className="w-8 h-8" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 text-white hover:text-orange-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center pr-16">
            <button className="relative p-2">
              <img src={shopIcon} alt="Shopping Cart" className="w-12 h-12" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Tìm BĐS theo khu vực hoặc dự án"
                className="flex-1 px-4 py-3 text-gray-700 bg-white rounded-l-lg focus:outline-none"
              />
              <button 
                className={`px-4 py-3 bg-orange-500 text-white rounded-r-lg focus:outline-none transition-colors ${
                  isSearchLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
                }`}
                onClick={handleSearchClick}
                disabled={isSearchLoading}
              >
                {isSearchLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 h-16 pl-[420px]">
            <div className="relative dropdown-container">
              <button
                onClick={toggleLoaiHinhDropdown}
                className="flex items-center space-x-1 text-white hover:text-orange-400 focus:outline-none"
              >
                <span>Loại hình</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLoaiHinhDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Căn hộ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Nhà phố
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Biệt thự
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đất nền
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Khoảng giá */}
            <div className="relative dropdown-container">
              <button
                onClick={toggleKhoangGiaDropdown}
                className="flex items-center space-x-1 text-white hover:text-orange-400 focus:outline-none"
              >
                <span>Khoảng giá</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isKhoangGiaDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dưới 1 tỷ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      1 - 3 tỷ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      3 - 5 tỷ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Trên 5 tỷ
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Diện tích */}
            <div className="relative dropdown-container">
              <button
                onClick={toggleDienTichDropdown}
                className="flex items-center space-x-1 text-white hover:text-orange-400 focus:outline-none"
              >
                <span>Diện tích</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDienTichDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dưới 50m²
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      50 - 80m²
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      80 - 120m²
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Trên 120m²
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Thêm bộ lọc */}
            <div className="relative dropdown-container">
              <button
                onClick={toggleThemBoLocDropdown}
                className="flex items-center space-x-1 text-white hover:text-orange-400 focus:outline-none"
              >
                <span>Thêm bộ lọc</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isThemBoLocDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Hướng nhà
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Số phòng ngủ
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Số phòng tắm
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đã bàn giao
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1B3459] border-t border-gray-600">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Account Section */}
            <div className="border-b border-gray-600 pb-4 mb-4">
              <div className="flex items-center space-x-2 text-white mb-3">
                <img src={accountIcon} alt="Account" className="w-5 h-5" />
                <span className="text-red-400">Đăng ký</span>
                <span>/</span>
                <span>Đăng nhập</span>
              </div>
              <div className="flex items-center space-x-4 text-white text-sm">
                <span className="flex items-center space-x-1">
                  <img
                    src={notificationIcon}
                    alt="Notification"
                    className="w-4 h-4"
                  />
                  <span>Thông báo</span>
                </span>
                <span className="flex items-center space-x-1">
                  <img src={questionIcon} alt="Help" className="w-4 h-4" />
                  <span>Hỗ trợ</span>
                </span>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-4">
              {/* Mobile Loại hình */}
              <div className="dropdown-container">
                <button
                  onClick={toggleLoaiHinhDropdown}
                  className="flex items-center justify-between w-full text-left text-white hover:text-orange-400 focus:outline-none py-2"
                >
                  <span>Loại hình</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isLoaiHinhDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isLoaiHinhDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Căn hộ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Nhà phố
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Biệt thự
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Đất nền
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Khoảng giá */}
              <div className="dropdown-container">
                <button
                  onClick={toggleKhoangGiaDropdown}
                  className="flex items-center justify-between w-full text-left text-white hover:text-orange-400 focus:outline-none py-2"
                >
                  <span>Khoảng giá</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isKhoangGiaDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isKhoangGiaDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Dưới 1 tỷ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      1 - 3 tỷ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      3 - 5 tỷ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Trên 5 tỷ
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Diện tích */}
              <div className="dropdown-container">
                <button
                  onClick={toggleDienTichDropdown}
                  className="flex items-center justify-between w-full text-left text-white hover:text-orange-400 focus:outline-none py-2"
                >
                  <span>Diện tích</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDienTichDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDienTichDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Dưới 50m²
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      50 - 80m²
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      80 - 120m²
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Trên 120m²
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Thêm bộ lọc */}
              <div className="dropdown-container">
                <button
                  onClick={toggleThemBoLocDropdown}
                  className="flex items-center justify-between w-full text-left text-white hover:text-orange-400 focus:outline-none py-2"
                >
                  <span>Thêm bộ lọc</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isThemBoLocDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isThemBoLocDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Hướng nhà
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Số phòng ngủ
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Số phòng tắm
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Đã bàn giao
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="border-t border-gray-600 pt-4 mt-4">
              <div className="flex items-center space-x-4 text-white text-sm">
                <span>Kết nối:</span>
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header_menu;
