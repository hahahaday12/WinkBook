import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

interface Product {
  product_no: number;
  product_name:string;
  small_image: string;
  price: number;
}

interface HeaderInputProps {
  product: Product[];
}

export const HeaderInput: React.FC<HeaderInputProps> = ({product}) => {
  const [keyword, setKeyWord] = useState('');
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);
  const [showInputButton, setShowInputButton] = useState(false);
  const navigate = useNavigate();


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
    setShowInputButton(e.target.value.trim() !== '');
  };

  const onSubmit = async () => {
    navigate('/search/' + keyword);
    setShowInputButton(false);
  };

  //Enter 입력이 되면 클릭 이벤트 실행
  const OnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (keyword === '') {
        Swal.fire('검색어를 입력해주세요!', '', 'warning');
      } else {
        onSubmit();
      }
    }
  };

  const handleInputButtonClick = () => {
    if (keyword === '') {
      Swal.fire('검색어를 입력해주세요!', '', 'warning');
    } else {
      onSubmit();
    }
  };

  const filterItems = (searchTerm: string) => {
    const filtered = product.filter((item:Product) =>
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    filterItems(keyword);
  }, [keyword, product]);
  
  // 가격에 적힌 숫자 한국표기
  const formatter = new Intl.NumberFormat("ko-KR");

  return(
    <>
    <div className="searchBox">
      <input
        type="text"
        placeholder="검색"
        onChange={handleInputChange}
        onKeyPress={OnKeyPress}
        onBlur={() => {
          setShowInputButton(false);
        }}
        onFocus={() => {
          setShowInputButton(true);
        }}
      />
      <img
        src="/images/search-icon.png"
        alt="searchicon"
        onClick={handleInputButtonClick}
      />

      {showInputButton && keyword && (
        <div className="Input-Buttom">
          <div className="Input-Buttom__inner">
            {keyword && filteredItems.map((item: Product) => {
              if (item.product_name.trim() !== '') {
                return (
                  <Link
                    to={`/detail/${item.product_no}`}
                    key={item.product_no}
                    className="Input-Buttom__innerBox">
                  <div className="Input-Buttom__ImageBox">
                    <img src={item.small_image} alt="searchbookimage" />
                  </div>
                  <div className="Input-Buttom__title">
                    <span>{item.product_name}</span>
                    <span>{formatter.format(item.price)}원</span>
                  </div>
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )}
    </div>
    </>
  )
}