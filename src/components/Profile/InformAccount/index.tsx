import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";


const InfoAccount = () => {
  const [accountInfo, setAccountInfo] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    address: "",
    idNumber: "",
    idAttachment: null as File | null,
    issuedPlace: "",
    issuedDate: "",
    permanentAddress: "",
    contactAddress: "",
    city: "",
    district: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAccountInfo({ ...accountInfo, idAttachment: e.target.files[0] });
    }
  };

  const handleSave = () => {
    console.log("Thông tin đã lưu:", accountInfo);
    alert("Thông tin đã được lưu!");
  };

  return (
    <div className="p-4 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Thông tin tài khoản</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Thông tin cá nhân</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Họ và tên</label>
          <input
            type="text"
            name="fullName"
            value={accountInfo.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>ngày sinh</label>
          <input
            type="date"
            name="birthDate"
            value={accountInfo.birthDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
  <label>giới tính</label>
  <select
    name="gender"
    value={accountInfo.gender}
    onChange={handleChange}
    className="w-full p-2 border rounded"
  >
    <option value="">-- Chọn giới tính --</option>
    <option value="Nam">Nam</option>
    <option value="Nữ">Nữ</option>
    <option value="Khác">Khác</option>
  </select>
</div>

        <div>
          <label>địa chỉ</label>
          <input
            type="text"
            name="address"
            value={accountInfo.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Thông tin liên hệ</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>số điện thoại</label>
          <input
            type="tel"
            name="phone"
            value={accountInfo.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={accountInfo.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="mt-6 text-left">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
  <AiOutlineInfoCircle className="text-blue-600 text-lg" />
  <span>SĐT này dùng để đăng nhập và không thể thay đổi</span>
</div>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-[#1B3459] text-white rounded hover:bg-[#16325f]"
        >
          Lưu thông tin
        </button>
      </div>
    </div>
  );
};

export default InfoAccount;