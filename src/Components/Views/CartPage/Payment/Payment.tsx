import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenMe } from '@/Apis/register';
import Swal from 'sweetalert2';

interface PaymentInfo {
  amount: number;
  productlists: any;
  setdatalist: any;
}

interface BuyItem {
  id: number;
  product_name: string;
  price: number;
  detail_image: string;
  product_no: string;
  selectedItem?: any;
  setdatalist: any;
}

interface PaymentsUser {
  displayName: string;
  email: string;
}

interface TextType{
  success: string;
  error_msg: string;
}



const { VITE_IMP_OWNER } = import.meta.env;

const Payment = ({ amount, productlists, setdatalist }: PaymentInfo) => {
  
  const orderNumber = `mid_${new Date().getTime()}`;
  const navigate = useNavigate();
  const [user, setUser] = useState<PaymentsUser>({
    displayName: '',
    email: ''
  });

  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  useEffect(() => {
    const Payauthenticate = async () => {
      try {
        const userData = await TokenMe();
        setUser((prevUser) => ({
          ...prevUser,
          displayName: userData.displayName,
          email: userData.email,
        }));
      } catch (error) {
        console.error(error);
      }
    };
    Payauthenticate();
  }, []);


  const onClickPayment = () => {
    const itemName = productlists
      .map((obj: { product_name: string }) => obj.product_name)
      .join(',');
    const IMP = (window as any).IMP;
    IMP.init(VITE_IMP_OWNER);

    const data = {
      pg: 'html5_inicis', // PG사 html5_inicis: KG이니시스, kakaopay: 카카오페이, naverpay: 네이버페이, payco: 페이코
      pay_method: 'card', // 결제수단
      merchant_uid: orderNumber,
      amount: `${amount}`, // 결제금액
      name: `${itemName}`, // 주문명
      buyer_name: user.displayName, // 구매자 이름
      buyer_email: user.email,
      custom_data: productlists,
    };
    IMP.request_pay(data, callback);
  };

  function callback(response: TextType) {
    const { success, error_msg } = response;

    if (success) {
      Swal.fire('결제 성공!', '', 'success').then(() => {
        const mypayarray: string | null = window.localStorage.getItem("mypayment");
        const combinedArray: string[] | null = mypayarray ? JSON.parse(mypayarray) : null;
        if (!combinedArray) {
          window.localStorage.setItem("mypayment", JSON.stringify([orderNumber]));
        } else {
          combinedArray.push(orderNumber);
          window.localStorage.setItem("mypayment", JSON.stringify(combinedArray));
        }  

        // productlists 배열에서 각 제품의 product_no를 추출하여 문자열로 변환하고, 결제가 완료된 제품 번호들을 저장
        const productItemlist = productlists.map((obj: { product_no: any }) => obj.product_no).join(',');
        //다음으로, 로컬 스토리지에서 "cart"라는 이름의 데이터를 가져와서 cartlist 배열로 변환. 
        const cartlist: BuyItem[] = JSON.parse(window.localStorage.getItem('cart') || '[]');
          //배열을 이용하여 결제가 완료된 제품을 장바구니에서 제거한 후, 남은 제품 정보를 다시 로컬 스토리지에 업데이트
        const updatedArray = cartlist.filter((item) => !productItemlist.includes(item.product_no));
        window.localStorage.setItem('cart', JSON.stringify(updatedArray));
        setdatalist(updatedArray);

        navigate('/mypage')
      }); 
    } else {
      
      Swal.fire(`결제 실패 되었습니다! 다시 확인해주세요.`, '', 'error');
    }
  }
  return (
    <>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
};

export default Payment;
