import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteButton from '@/Components/Button/CartDeletebutton';
import './CartItems.scss';
import { Item } from '../CartPage';

export type CheckOneFunction = (
  event: React.ChangeEvent<HTMLInputElement>,
  buyItem: Item[],
  gubun: string
) => number[];

export type CheckTwoFunction = (
  event: React.ChangeEvent<HTMLInputElement>,
  prevCheckedItems: number[],
  el: Item
) => number[];

export type CartItemsProps = {
  check: number[];
  delete: (key: string) => void;
  datalist: Item[];
  checkOne: CheckOneFunction;
  checkTwo: CheckTwoFunction;
};

const CartItems = ({
  check,
  delete: RemoveBuyItem,
  datalist,
  checkOne,
  checkTwo,
}: CartItemsProps) => {
  const [buyItem, setbuyItem] = useState<Item[]>([]);
  const [checkedItems, setCheckedItems] = useState<number[]>(check);
  const [allCheck, setallCheck] = useState(false);

  useEffect(() => {
    setbuyItem(datalist);
  }, [datalist]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedItems(checkOne(event, buyItem, 'buy'));
      setallCheck(true);
    } else {
      setCheckedItems(checkOne(event, buyItem, 'buy'));
      setallCheck(false);
    }
  };

  const handleChange2 =
    (el: Item) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems((prevCheckedItems) =>
        checkTwo(event, prevCheckedItems, el)
      );
    };

  const children = (el: Item, index: number) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: 3,
        fontSize: 'large',
      }}
    >
      <FormControlLabel
        label=""
        control={
          <Checkbox
            checked={checkedItems.includes(index)}
            onChange={handleChange2(el)}
            name={index.toString()}
          />
        }
      />
    </Box>
  );

  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      <div className="CartPageTable__Buy">
        <FormControlLabel
          label=""
          control={
            <div className="LableBox">
              <Checkbox
                size="medium"
                checked={allCheck}
                indeterminate={
                  checkedItems.length > 0 &&
                  checkedItems.length < buyItem.length
                }
                onChange={handleChange1}
                style={{ marginTop: '8px' }}
              />
            </div>
          }
        />

        <div className="ProductNameBox">
          <span>상품명</span>
        </div>

        <div className="PriceNameBox">
          <p>가격</p>
        </div>

        <div className="DeleteNameBox">
          <span>삭제</span>
        </div>
      </div>

      <div className="ItemsContainer">
        {buyItem
          .filter((el: Item) => el.gubun === 'buy')
          .map((el, index) => (
            <div className="ItemContainer" key={index}>
              <div className="CheckContainer">{children(el, index)}</div>
              <div key={el.id} className="ImageBox">
                <img src={el.detail_image} alt="cartbookimage" />
              </div>
              <div className="TextInner">
                <span>{el.product_name}</span>
              </div>

              <div className="PriceInner">
                <span>{formatter.format(el.price)}원</span>
              </div>

              <div className="CartButtonBox">
                <DeleteButton onDelete={() => RemoveBuyItem(el.product_no)} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default CartItems;
