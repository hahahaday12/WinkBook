import './CartPage.scss';
import { useState, useEffect } from 'react';
import CartItems from './CartItems/CartItems';
import RentalItems from './CartRent/CartRent';
import Payment from './Payment/Payment';
import Swal from 'sweetalert2';
import useCheckButton from './CheckButton/CheckCommon';

export type Item = {
  id: number;
  product_name: string;
  price: number;
  detail_image: string;
  product_no: string;
  gubun: string;
  rentdate: number;
  list_image: string;
  summary_description: string;
  product_tag: string;
  retail_price: number;
};

function CartPage() {
  const { selectedItem, checkOne, checkTwo } = useCheckButton();
  const [CartItemsValue] = useState<number[]>([]);
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [buyItem, setbuyItem] = useState<Item[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    const buyItems = cartData ? JSON.parse(cartData) : [];
    setbuyItem(buyItems);
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [selectedItem]);

  const calculateTotal = () => {
    setTotal(0);
    let total = 0;
    if (Array.isArray(selectedItem)) {
      selectedItem.forEach((item: Item) => {
        const itemPrice = parseInt(String(item.price));
        if (!isNaN(itemPrice)) {
          total += itemPrice;
        }
      });
    } else {
      total = 0;
    }
    setTotal(total);
    setShowTotal(true);
  };

  const RemoveBuyItem = (key: string) => {
    Swal.fire({
      title: '정말 삭제하시겠습니까?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#df307f',
      cancelButtonColor: '#e24457',
      confirmButtonText: '네',
      cancelButtonText: '아니오',
    }).then((result) => {
      if (result.isConfirmed) {
        const cartDataString = localStorage.getItem('cart');

        if (cartDataString !== null) {
          const updatedCartData: Item[] = JSON.parse(cartDataString);
          const datalist = JSON.stringify(
            updatedCartData.filter((item) => item.product_no !== key)
          );
          localStorage.setItem('cart', datalist);
          setbuyItem(JSON.parse(datalist));
          Swal.fire('삭제되었습니다!', '', 'success');
        } else {
          console.log('cart data not found');
        }
      } else {
        Swal.fire('취소되었습니다.', '', 'success');
      }
    });
  };
  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      <div className="CartPage-AllLayout">
        <span className="ProductText">구매</span>
        <div className="CartContainer">
          <CartItems
            check={CartItemsValue}
            delete={RemoveBuyItem}
            datalist={buyItem}
            checkOne={checkOne}
            checkTwo={checkTwo}
          />
        </div>
        <span className="RentText">대여 </span>
        <div className="RentContainer">
          <RentalItems
            check={CartItemsValue}
            delete={RemoveBuyItem}
            datalist={buyItem}
            checkOne={checkOne}
            checkTwo={checkTwo}
          />
        </div>

        <span className="BuyText">결제</span>
        <div className="BuyContainer">
          <div className="NowBuy">
            <div className="Buy-Container">
              <div className="Pay-Container">
                <span>총 상품 가격 </span>
                {ShowTotal && <h3>{formatter.format(Total)}원</h3>}
              </div>
            </div>

            <div className="AllCount-Container">
              <div className="AllCount-Container__box">
                <span>총 결제 예상 금액</span>
                <span>{formatter.format(Total)}원</span>
              </div>
            </div>

            <div className="Buy-ButtonBox">
              <Payment
                amount={Total}
                productlists={selectedItem}
                setdatalist={setbuyItem}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
