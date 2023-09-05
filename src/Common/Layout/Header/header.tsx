import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext, useCallback } from 'react';
import { LogoutForm, TokenMe } from '@/Apis/register';
import { getList } from '@/Apis/productApi';
import { TokenContext } from '@/Context/TokenContext';
import { links,  headerText, tokenLinks } from '@/constants/headerLinks';
import { HeaderInput } from '@/Components/Views/SearchPage/SearchInput/input';
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
  const defaultProfileImgUrl = '/images/default-profile.avif';
  const [user, setUser] = useState<User>({ displayName: '', profileImg: '' });
  const [product, setProductInfo] = useState<Product[]>([]);

  const tokenContext = useContext(TokenContext);
  const navigate = useNavigate();

  if (!tokenContext) {
      throw new Error("TokenContext must be used within a TokenProvider");
  }
  const { token, setToken } = tokenContext;
  
  const logoutHandler = () => {
    LogoutForm()
    .then(() => {
    setToken("");
    Swal.fire('로그아웃 되었습니다!', '다음에 또 만나요!', 'success');
    navigate('/');
    })
    .catch((error) => {
      console.log('Logout failed:', error);
      if (error.response && error.response.status === 401) {
        // 상태 코드가 401인 경우 토큰 제거
        localStorage.removeItem('token');
        console.log('토큰이 제거되었습니다.');
        window.location.reload();
      }
    });
  };

  //const token = localStorage.getItem("token")
  // 처음에 token 값을 가져오고, 이미지가 등록되지 않았으면 설정된 이미지 노출
  useEffect(() => {
    console.log(token);
    const authenticate = async () => {
      try {
        const userData = await TokenMe();

        // 사용자 정보를 업데이트하기 전에 profileImg가 존재하지 않을 경우에만 기본 프로필 이미지 URL을 사용
        setUser((prevUser) => ({
          ...prevUser,
          displayName: userData.displayName,
          profileImg: userData.profileImg || defaultProfileImgUrl,
        }));
      } catch (error) {
        console.error(error);
      }
    };
    if (token) {
      authenticate();
    }
  }, [token]);

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

  const searchLinks = links.map(
    useCallback(
      ({ path, text }) => (
        <NavLink
          key={path}
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={path}>
          {text}
        </NavLink>
      ),
      []
    )
  )

  const privatelinks = tokenLinks.map(
    useCallback(
      ({ path, text }) => (
        <NavLink
          key={path}
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={path}>
          {text}
        </NavLink>
      ),
      []
    )
  )

  return (
  <>
    <header className="headerContainer">
      <div className="itemsWrapper">
        <Link to="/" className="logoBox">
          <img src="/images/Wink_logo.avif" alt="logo" />
        </Link>
        <HeaderInput product={product}/>
        <div className="Header-box">
          {privatelinks}
            {token ? (
              <div className="Header-box__text">
                <div className="Header-box__logout" onClick={logoutHandler}>
                  {headerText.signout}
                </div>
                <div className="cart">
                  <img className="cartPhoto" src={user.profileImg} />
                </div>
              </div>
            ) : (
              <>
              {searchLinks}
              </>
          )}  
        </div>  
      </div>
    </header>
  </>
  );
}
export default Header;
