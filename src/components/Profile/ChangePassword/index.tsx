import React, { useState } from "react";
import './style.css';

const ChangePassword = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
    setError(""); // Xóa lỗi khi người dùng nhập lại
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-=#])[A-Za-z\d@$!%*?&\-=#]{8,128}$/;
    return regex.test(password);
  };

  const handleSave = () => {
    const { currentPassword, newPassword } = passwordData;

    if (!currentPassword || !newPassword ) {
      setError("Vui lòng điền đầy đủ tất cả các trường.");
      return;
    }

    if (!validatePassword(newPassword)) {
      setError("Mật khẩu mới phải có ít nhất 1 ký tự in hoa, 1 ký tự in thường, 1 ký tự đặc biệt (@$!%*?&-=#), 1 ký tự số và có độ dài từ 8 đến 128 ký tự.");
      return;
    }

    console.log("Thông tin mật khẩu:", passwordData);
    alert("Mật khẩu đã được thay đổi!");
    setError(""); 
  };

  return (
    <div className="change-password-container">
      <h1 className="heading-main">Thay Đổi Mật Khẩu</h1>
      <h2 className="heading-sub">Cập nhật mật khẩu mới cho tài khoản</h2>

      <div className="form-group">
        <label className="label">Mật khẩu hiện tại</label>
        <input
          type="password"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handleChange}
          className="input"
        />
      </div>

      <div className="form-group">
        <label className="label">Mật khẩu mới</label>
        <input
          type="password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handleChange}
          className="input"
        />
      </div>
      {error && <p className="error-message">{error}</p>}

      <button onClick={handleSave} className="btn-save-password">
        Thay đổi mật khẩu
      </button>
    </div>
  );
};

export default ChangePassword;
