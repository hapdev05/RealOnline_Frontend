import React from 'react';
import Slider1 from "../../../assets/images/baner1.png"
import './style.css'
type CanItem = {
  id: number;
  code: string;
  project: string;
  price: string;
  status: string;
  management: string;
  paymentProgress?: string;
  dateTime?: string;
};

interface TableProps {
  data: CanItem[];
  setSelectedItem: (item: CanItem) => void;
  selectedCategory: string;
}

const Table: React.FC<TableProps> = ({ data, setSelectedItem, selectedCategory }) => {
  return (
    <div className="table-container">
      {data.map((item) => (
        <div key={item.id} className="table-item" onClick={() => setSelectedItem(item)}>
          <div className="table-header">
            <span className="project-name">Dự án: {item.project}</span>
            <span className="status">{item.status}</span>
          </div>
          <hr className="divider" />
          <div className="table-details">
            <img className='image' src={Slider1} alt="" />
            <div className="detail-content">
            <div className="name">Tên: {item.code}</div>
              <div className="price">Giá: {item.price} tỷ</div>
              <div className="block">Block {item.code.split(':')[1]}</div>
              <div className="area">Diện tích: 75,5 m²</div>
              <div className="type">Loại BĐS: Chung cư</div>
              <div className="paid">Đã thanh toán: 50 triệu</div>
              <div className="remaining">Còn lại: {parseFloat(item.price) - 0.05} tỷ</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;