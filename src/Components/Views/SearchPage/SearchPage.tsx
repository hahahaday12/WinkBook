import { useState, useEffect } from 'react';
import './SearchPage.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const { VITE_CLIENT_ID } = import.meta.env;
import SearchContents from './searchContents/ContentsInner';
import { Item } from '../CartPage/CartPage';

const ajax = axios.create({
  baseURL: '/cafe24',
  headers: {
    'Content-Type': 'application/json',
    'X-Cafe24-Api-Version': '2023-03-01',
    'X-Cafe24-Client-Id': VITE_CLIENT_ID,
  },
});

export default function SearchPage() {
  const [search, setSearch] = useState<Item[]>();
  const [offset] = useState(0);
  const [count, setCount] = useState(0);
  const params = useParams<{ keyword?: string }>();

  async function SearchAPI(product_name: string) {
    try {
      const res = await ajax.get('/products', {
        params: {
          product_name,
          offset: offset * 10,
        },
      });
      return res.data.products as Item[];
    } catch (err) {
      console.log(err);
      return [] as Item[];
    }
  }

  useEffect(() => {
    (async () => {
      if (params.keyword) {
        await ajax
          .get('/products/count', {
            params: {
              product_name: params.keyword,
            },
          })
          .then((res) => setCount(res.data.count));
        const result = await SearchAPI(params.keyword);
        setSearch(result);
        window.scrollTo(0, 0);
      }
    })();
  }, [params, offset]);

  return (
    <>
      {search?.length === 0 ? (
        <div className="no_content">
          <p>검색결과가 존재하지 않습니다! 😊</p>
        </div>
      ) : (
        <div className="Search-wrapper">
          <div className="count">
            😶‍🌫️ "{params.keyword}"에 대한 검색결과가 총 {count}개 있습니다.
          </div>
          <hr />
          <SearchContents search={search || []} />
          {/* <div className="pagination">
            <ul
              onClick={(e) => {
                if (e.target instanceof HTMLLIElement) {
                  setOffset(e.target.value);
                }
              }}
            >
              {Array(parseInt(((count - 0.1) / 10 + 1).toString()))
                .fill(0)
                .map((index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setOffset(index);
                      }}
                      id="click"
                      className={index == offset ? 'button_1' : 'button_2'}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
            </ul>
          </div> */}
        </div>
      )}
    </>
  );
}
