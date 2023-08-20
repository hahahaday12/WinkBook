import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { LogoutForm, TokenMe } from '@/Apis/register';
import { getList } from '@/Apis/productApi';
import Swal from 'sweetalert2';
import './headers.scss';

interface User {
  displayName: string;
  profileImg: string;
}

interface Product {
  product_no: number;
  product_name: string;
  small_image: string;
  price: number;
}

function Header() {
  const defaultProfileImgUrl = '/images/default-profile.jpg';
  const [user, setUser] = useState<User>({ displayName: '', profileImg: '' });
  const [keyword, setKeyWord] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [product, setProductInfo] = useState([]);
  const [showInputButton, setShowInputButton] = useState(false);
  const [userIsAuthenticated, setUserIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
    setShowInputButton(e.target.value.trim() !== '');
  };

  const logoutHandler = () => {
    LogoutForm()
    .then(() => {
    localStorage.removeItem('token');
    Swal.fire('로그아웃 되었습니다!', '다음에 또 만나요!', 'success');
    navigate('/');
    })
    .catch((error: string) => {
      console.log('Logout failed:', error);
    });
  };

  const onSubmit = async () => {
    navigate('/search/' + keyword);
    setShowInputButton(false);
  };

  // 처음에 token 값을 가져오고, 이미지가 등록되지 않았으면 설정된 이미지 노출
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await TokenMe();
        setUserIsAuthenticated(userData);
        setUser((prevUser) => ({
          ...prevUser,
          displayName: userData.displayName,
          profileImg: userData.profileImg || defaultProfileImgUrl,
        }));
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  // Enter 입력이 되면 클릭 이벤트 실행
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
    const filtered = product.filter((item: Product) =>
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    filterItems(keyword);
  }, [keyword, product]);

  // 페이지 처음 들어올때, 리미트 100개의 상품 노출
  useEffect(() => {
    (async () => {
      const cate = {
        limit: 100,
      };
      const data = await getList(cate);
      setProductInfo(data);
    })();
  }, []);

  // 가격에 적힌 숫자 한국표기
  const formatter = new Intl.NumberFormat("ko-KR");

  const categoryText = {
    cart:'장바구니',
    mypage:'마이페이지',
    logout:'로그아웃',
    signup:'회원가입',
    signin:'로그인'
  }

  return (
  <>
    <header className="headerContainer">
      <div className="itemsWrapper">
        <Link to="/" className="logoBox">
          <img src="/images/Wink_logo.png" alt="logo" />
        </Link>
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

        <div className="Header-box">
          <Link className="Header-box__text" to="/cart">
            {categoryText.cart}
          </Link>
          <Link className="Header-box__text" to="/mypage">
            {categoryText.mypage}
          </Link>
          {userIsAuthenticated !== null ? (
            userIsAuthenticated ? (
            <div className="Header-box__text">
              <div className="Header-box__logout" onClick={logoutHandler}>
                {categoryText.logout}
              </div>
              <div className="cart">
                <img className="cartPhoto" src={user.profileImg} />
              </div>
            </div>
            ) : (
            <>
            <Link className="Header-box__text" to="/join">
              <p>{categoryText.signup}</p>
            </Link>
            <Link className="Header-box__text" to="/login">
              <p>{categoryText.signin}</p>
            </Link>
            </>
            )
          ) : null}
        </div>  
      </div>
    </header>
  </>
  );
}
export default Header;
