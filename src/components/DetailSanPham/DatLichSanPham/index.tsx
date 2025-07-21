import React from "react";
import './style.css'
const DatLichSanPham: React.FC = () => {
  return (
    <div className="sanpham-content">
      <h3>Đặt lịch xem nhà ngay hôm nay để nhận ưu đãi tốt nhất</h3>

      <div className="sanpham-best-price">
        <div className="label">Giá tốt nhất từ TDC</div>
        <div className="price">15.445.695.880 VNĐ</div>
        <div className="price-original">15.445.695.880 VNĐ</div>
      </div>

      <div className="sanpham-date-pick">
        <button>Thứ hai<br />7/7</button>
        <button>Thứ ba<br />8/7</button>
        <button>Thứ tư<br />9/7</button>
      </div>

      <button className="sanpham-booking-btn">Đặt lịch ngay</button>

      <div className="sanpham-actions">
        <button className="add-to-cart">Giỏ hàng</button>
        <button className="buy-now">Mua ngay</button>
      </div>
    </div>
  );
};

export default DatLichSanPham;
