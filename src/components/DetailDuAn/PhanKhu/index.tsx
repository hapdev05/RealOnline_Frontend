import './style.css'
import { Navigate, useNavigate } from 'react-router-dom';
interface CardData {
    id: number;
    image: string;
    area: string;
    project: string;
    style: string;
    type: string;
  }
  export default function PhanKhu({ cards }: { cards: CardData[] }) {
  const Navigate = useNavigate();

    return (
      <div className="inform-card">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <p className="light-text">Phân khu</p>
            <p className="bold-text">{card.area}</p>
            <img src={card.image} alt={`Card ${card.id}`} className="card-image" />
            <p className="light-text">Dự án</p>
            <p className="bold-text">{card.project}</p>
            <p className="light-text">Phong cách xây dựng</p>
            <p className="bold-text">{card.style}</p>
            <p className="light-text">Loại hình</p>
            <p className="bold-text">{card.type}</p>
            <button onClick={()=>Navigate('/phanKhu')} className="detail-btn">Xem chi tiết</button>
          </div>
        ))}
      </div>
    );
  }
  