import React from "react";
import './style.css'
const NewList = () => {
  const data = [
    { id: 1, requestCode: "REQ001", requestType: "Hỗ trợ kỹ thuật", createdTime: "2025-07-25 14:00", consultationTime: "2025-07-26 10:00", status: "Đang xử lý" },
    { id: 2, requestCode: "REQ002", requestType: "Khiếu nại", createdTime: "2025-07-24 09:30", consultationTime: "2025-07-25 14:00", status: "Hoàn thành" },
    { id: 3, requestCode: "REQ003", requestType: "Tư vấn sản phẩm", createdTime: "2025-07-23 11:15", consultationTime: "2025-07-24 15:00", status: "Chờ xử lý" },
    { id: 4, requestCode: "REQ004", requestType: "Hỗ trợ thanh toán", createdTime: "2025-07-22 16:45", consultationTime: "2025-07-23 09:00", status: "Đang xử lý" },
    { id: 5, requestCode: "REQ005", requestType: "Đăng ký dịch vụ", createdTime: "2025-07-21 08:20", consultationTime: "2025-07-22 13:00", status: "Hoàn thành" },
  ];

  return (
    <div className="new-list">
      <h1 className="title">Danh sách yêu cầu</h1>

      <div className="filters">
        <button className="filter-button">Loại yêu cầu</button>
        <button className="filter-button">Trạng thái</button>
        <button className="filter-button">Thời gian tạo</button>
      </div>

      <div className="table-container">
        <table className="request-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã yêu cầu</th>
              <th>Loại yêu cầu</th>
              <th>Thời gian tạo</th>
              <th>Thời gian hẹn/Tư vấn</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.requestCode}</td>
                <td>{item.requestType}</td>
                <td>{item.createdTime}</td>
                <td>{item.consultationTime}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewList;
