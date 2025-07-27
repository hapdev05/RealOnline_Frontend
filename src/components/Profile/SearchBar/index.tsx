import React, { useState } from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, selectedCategory }) => {
  const [selectedStatus, setSelectedStatus] = useState(''); // Thêm state để lưu trạng thái

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value); // Chỉ cập nhật trạng thái, không ảnh hưởng searchTerm
  };

  return (
    <div className="mb-4 flex items-center">
      <input
        type="text"
        placeholder="Nhập mã căn để tìm kiếm .... 🔎"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/3 p-2 border rounded"
      />
      {['Giữ chỗ', 'Đã cọc', 'Đã mua'].includes(selectedCategory) && (
        <select
          className="ml-2 w-1/6 p-2 border rounded"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Chọn trạng thái</option>
          <option value="Đang giữ chỗ">Đang giữ chỗ</option>
          <option value="Đã hủy">Đã hủy</option>
          <option value="Đã gia hạn">Đã gia hạn</option>
          <option value="Đang cọc">Đang cọc</option>
          <option value="Chờ duyệt">Chờ duyệt</option>
          <option value="Đã ký HĐMB">Đã ký HĐMB</option>
          <option value="Đã bàn giao">Đã bàn giao</option>
        </select>
      )}
    </div>
  );
};

export default SearchBar;