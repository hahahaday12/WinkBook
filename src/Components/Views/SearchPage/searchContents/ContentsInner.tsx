import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { Item } from '../../CartPage/CartPage';

function SearchContents({ search }: { search: Item[] }) {
  const navigate = useNavigate();

  const optionButton = (search: Item, type: string) => {
    const cart: Item[] = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.some((item: Item) => item.product_no === search.product_no)) {
      Swal.fire('이미 장바구니에 담으셨습니다.', '', 'warning');
      return false;
    }
    const searchItem: Item =
      type === 'rent'
        ? { ...search, rentdate: 7, gubun: type }
        : { ...search, gubun: type };
    cart.push(searchItem);
    const updatedCart = Array.from(new Set(cart));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('장바구니에 담겼습니다.');
    navigate('/cart');
  };

  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      {search &&
        search.map((item: Item) => {
          return (
            <>
              <div className="SearchPage">
                <Link to={`/detail/${item.product_no}`}>
                  <div className="SearchPage__Images">
                    <img src={item.list_image} alt="책표지" />
                  </div>
                </Link>

                <div className="SearchPage__Items">
                  <Link to={`/detail/${item.product_no}`}>
                    <h1>{item.product_name}</h1>
                  </Link>

                  <div className="SearchPage__Item">
                    <p>{item.summary_description}</p>
                    <p>{item.product_tag}</p>
                  </div>
                  <div className="SearchPage__Price">
                    <p> {formatter.format(item.price)}원</p>
                    <p> {formatter.format(item.retail_price)}원</p>
                  </div>
                </div>
                <div className="SearchPage__ButtonBox">
                  <button onClick={() => optionButton(item, 'buy')}>
                    구매하기
                  </button>
                  <button onClick={() => optionButton(item, 'rent')}>
                    대여하기
                  </button>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
export default SearchContents;
