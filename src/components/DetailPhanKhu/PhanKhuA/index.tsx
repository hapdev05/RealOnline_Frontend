import './style.css';
import { useNavigate } from 'react-router-dom';

interface CardData {
  id: number;
  image: string;
  area: string;
  acreage: string;
  price: string;
}

export default function PhanKhuA({ cards }: { cards: CardData[] }) {
  const navigate = useNavigate();

  return (
    <div className="phanKhuA-container">
      {cards.map((card) => (
        <div key={card.id} className="phanKhuA-card">
          <p className="phanKhuA-label">Loại hình</p>
          <p className="phanKhuA-value">{card.area}</p>
          <img src={card.image} alt={`Card ${card.id}`} className="phanKhuA-image" />
          <p className="phanKhuA-label">Diện tích </p>
          <p className="phanKhuA-value">{card.acreage}</p>
          <p className="phanKhuA-label">Giá bán</p>
          <p className="phanKhuA-value">{card.price}</p>
          <button onClick={() => navigate('/phanKhu')} className="phanKhuA-button">
            Xem chi tiết
          </button>
        </div>
      ))}
    </div>
  );
}
