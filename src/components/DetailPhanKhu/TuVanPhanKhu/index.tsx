import './style.css'
export default function TuVanFormPhanKhu() {
    return (
      <div>
        <h3 className="consult-title-phan-khu">Tư vấn mua chuyên sâu</h3>
        <form className="contact-form-phan-khu">
          <p className="benefit-text-phan-khu">Phân tích quỹ căn, chính sách, tiện ích.</p>
          <p className="benefit-text-phan-khu">Giải đáp mọi thắc mắc khách hàng.</p>
          <p className="benefit-text-phan-khu">Bảo mật thông tin cá nhân tuyệt đối.</p>
  
          <input type="text" required placeholder="Họ và tên *" />
          <input type="tel" required placeholder="Số điện thoại *" />
  
          <p className="consent-text-phan-khu">
            Bằng việc tiếp tục, bạn đồng ý với TDC về Điều khoản dịch vụ và Chính sách bảo mật.
          </p>
  
          <button type="submit">Nhận tư vấn ngay</button>
  
          <p className="or-text-phan-khu">Hoặc</p>
  
          <div className="form-contact-phan-khu">
            <p className="call-option-phan-khu">
              Gọi trực tiếp
              <br />
              0123 456 789
            </p>
            <p className="chat-option-phan-khu">Chat qua Zalo</p>
          </div>
        </form>
      </div>
    );
  }
  