import { Link } from 'react-router-dom';
import { useState } from 'react';
import './BookInfo.scss';

interface Props {
  productNo: number;
  productImg: string;
  productName: string;
  retailPrice: number;
  price: number;
  summary: string;
}

export default function BookInfo({
  productNo,
  productImg,
  productName,
  retailPrice,
  price,
  summary,
}: Props) {
  const [hover, setHover] = useState(false);

const formatter = new Intl.NumberFormat("ko-KR");

  return (
    <Link
      to={`detail/${productNo}`}
      key={productNo}
      className="book"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {hover && <div className="hover-description">{summary}</div>}
      {retailPrice !== price ? (
        <div className="discount">
          {Math.floor(((+retailPrice - +price) / +retailPrice) * 100)}%
        </div>
      ) : null}

      <div className="Book-container">
        <div className="BookInfo-Inner">
          <div className="RoundCircle"></div>
          <div className="Namebox">
            <span>{productName.split('(')[0]}</span>
          </div>
          {retailPrice === price ? (
            <div className="Main-Pricebox">{formatter.format(price)}원</div>
          ) : (
            <div className="Main-Pricebox">
              <span className="retail-price">{formatter.format(retailPrice)}원</span>
              <span>{formatter.format(price)}원</span>
            </div>
          )}
        </div>

        <img src={productImg} alt={productName} />
      </div>
    </Link>
  );
}
