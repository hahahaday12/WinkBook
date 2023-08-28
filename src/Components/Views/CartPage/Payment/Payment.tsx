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
      .map((obj: { product_name: any }) => obj.product_name)
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

  function callback(response: any) {
    const { success, error_msg } = response;

    if (success) {
      Swal.fire('결제 성공!', '', 'success').then(() => {
        const mypayarray: string | null = window.localStorage.getItem("mypayment");

        // mypayarray 변수에 저장된 로컬값"mypayment" 이 있다면, 해당문자열 JSON 파싱해서 대입 비어있음 NULL
        const combinedArray: string[] | null = mypayarray ? JSON.parse(mypayarray) : null;
        // 만약 !combinedArray 가 NULL이면, 새로운 배열 만들어서 결제내역 초기화 
        //orderNumber를 담은 배열을 JSON 형식으로 만들어 "mypayment" 키에 저장
        if (!combinedArray) {
          window.localStorage.setItem("mypayment", JSON.stringify([orderNumber]));
          // combinedArray에 이미 결제 내역이 있는 경우, orderNumber를 배열에 추가.
        } else {
          combinedArray.push(orderNumber);
          window.localStorage.setItem("mypayment", JSON.stringify(combinedArray));
        }  

        const productItemlist = productlists.map((obj: { product_no: any }) => obj.product_no)
        .join(',');
        const cartlist: BuyItem[] = JSON.parse(
        window.localStorage.getItem('cart') || '[]');

        const updatedArray = cartlist.filter((item) => !productItemlist.includes(item.product_no));
        window.localStorage.setItem('cart', JSON.stringify(updatedArray));
        setdatalist(updatedArray);
        navigate('/mypage')
      }); 
    } else {
      Swal.fire(`결제 실패: ${error_msg}`, '', 'error');
    }
  }
  return (
    <>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
};

export default Payment;
