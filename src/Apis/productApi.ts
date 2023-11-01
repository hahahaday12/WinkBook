import axios from 'axios';
import { cafeInstance } from './axios';

const { VITE_IMP_KEY, VITE_IMP_SECRET } = import.meta.env;

interface GetList {
  category?: number;
  product_no?: string;
  limit?: number;
}

export async function getList(info: GetList) {
  const { category, product_no, limit } = info;
  try {
    const { data } = await cafeInstance.get('/products', {
      params: {
        display: 'T',
        selling: 'T',
        category,
        product_no,
        limit,
      },
    });
    return data.products;
  } catch (err) {
    console.log(err);
  }
}

export async function getRecommand() {
  try {
    const res = await cafeInstance.get('/mains/2/products');
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getDetail(product_no: string) {
  try {
    const res = await cafeInstance.get(`/products/${product_no}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export const ImportToken = async () => {
  const response = await axios.post(
    '/iamport/users/getToken',
    {
      imp_key: VITE_IMP_KEY,
      imp_secret: VITE_IMP_SECRET,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const accessToken = response.data.response.access_token;
  return accessToken;
};

export const canceltoken = async (accessToken: string) => {
  const res = await axios.get(
    `/iamport/payments/status/paid?limit=100&sorting=paid&_token=${accessToken}`
  );
  return res.data;
};

//  const GetToken = async () => {
//    try {
//      const accessToken = await ImportToken();
//      return accessToken;
//    } catch (error) {
//      console.log(error);
//      throw error;
//    }
//  };
