import React, { useState } from "react";
import "./style.css";

interface MenuProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Menu: React.FC<MenuProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    "Quản lý căn": false,
    "Quản lý giao dịch & hợp đồng": false,
    "Quản lý yêu cầu": false,
    "Quản lý thông tin tài khoản": false,
  });

  const toggleExpand = (category: string) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
    // Không đặt selectedCategory khi nhấp vào "Quản lý căn"
  };

  return (
    <div className="profile-menu-container">
      <div className="profile-menu-header">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="profile-menu-avatar"
        />
        <h2 className="profile-menu-title">Quản lý căn</h2>
      </div>
      <div className="profile-menu-section">
        <div className="profile-menu-item" onClick={() => toggleExpand("Quản lý căn")}>
          Quản lý căn
        </div>
        {expanded["Quản lý căn"] && (
          <div className="profile-submenu">
            <div
              className={`profile-submenu-item ${selectedCategory === "Bất động sản" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Bất động sản")}
            >
              Bất động sản
            </div>
            <div
              className={`profile-submenu-item ${selectedCategory === "Đã xem" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Đã xem")}
            >
              Đã xem
            </div>
            <div
              className={`profile-submenu-item ${selectedCategory === "Yêu thích" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Yêu thích")}
            >
              Yêu thích
            </div>
          </div>
        )}
        <div
          className="profile-menu-item"
          onClick={() => toggleExpand("Quản lý giao dịch & hợp đồng")}
        >
          Quản lý giao dịch & hợp đồng
        </div>
        {expanded["Quản lý giao dịch & hợp đồng"] && (
          <div className="profile-submenu">
            <div
              className={`profile-submenu-item ${selectedCategory === "Quản lý đồng" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Quản lý đồng")}
            >
              Quản lý đồng
            </div>
            <div
              className={`profile-submenu-item ${selectedCategory === "Quản lý giao dịch" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Quản lý giao dịch")}
            >
              Quản lý giao dịch
            </div>
          </div>
        )}
        <div className="profile-menu-item" onClick={() => toggleExpand("Quản lý yêu cầu")}>
          Quản lý yêu cầu
        </div>
        {expanded["Quản lý yêu cầu"] && (
          <div className="profile-submenu">
            <div
              className={`profile-submenu-item ${selectedCategory === "Danh sách lịch hẹn" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Danh sách lịch hẹn")}
            >
              Danh sách lịch hẹn
            </div>
            <div
              className={`profile-submenu-item ${selectedCategory === "Danh sách yêu cầu" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Danh sách yêu cầu")}
            >
              Danh sách yêu cầu
            </div>
          </div>
        )}
        <div
          className="profile-menu-item"
          onClick={() => toggleExpand("Quản lý thông tin tài khoản")}
        >
          Quản lý thông tin tài khoản
        </div>
        {expanded["Quản lý thông tin tài khoản"] && (
          <div className="profile-submenu">
            <div
              className={`profile-submenu-item ${selectedCategory === "Thông tin tài khoản" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Thông tin tài khoản")}
            >
              Thông tin tài khoản
            </div>
            <div
              className={`profile-submenu-item ${selectedCategory === "Thay đổi mật khẩu" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Thay đổi mật khẩu")}
            >
              Thay đổi mật khẩu
            </div>
          </div>
        )}
        <hr className="profile-menu-divider" />
        <div className="profile-menu-logout" onClick={() => alert("Đăng xuất")}>
          Đăng xuất
        </div>
      </div>
    </div>
  );
};

export default Menu;