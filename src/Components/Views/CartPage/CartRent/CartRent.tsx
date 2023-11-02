import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteButton from '@/Components/Button/CartDeletebutton';
import './CartRent.scss';
import { CartItemsProps } from '../CartItems/CartItems';
import { Item } from '../CartPage';

const RentalItems = ({
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
      setCheckedItems(checkOne(event, buyItem, 'rent'));
      setallCheck(true);
    } else {
      setCheckedItems(checkOne(event, buyItem, 'rent'));
      setallCheck(false);
    }
  };

  const handleChange2 =
    (el: Item) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems(checkTwo(event, checkedItems, el));
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
          <div className="LableBox">
            <Checkbox
              checked={checkedItems.includes(index)}
              onChange={handleChange2(el)}
              name={index.toString()}
            />
          </div>
        }
      />
    </Box>
  );

  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      <div className="RentPageTable">
        <FormControlLabel
          label=""
          control={
            <div className="Rent-LableBox">
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
        <div className="Rental-Namebox">
          <span>상품명</span>
        </div>

        <div className="RentDay">
          <p>대여날짜</p>
        </div>

        <div className="Renatal-Price">
          <span>대여가격</span>
        </div>

        <div className="DeleteDay">
          <span>삭제</span>
        </div>
      </div>

      <div className="Rental-ItemsContainer">
        {buyItem
          .filter((el) => el.gubun === 'rent')
          .map((el, index) => (
            <div className="Rental-ItemContainer">
              <div className="Rental-CheckContainer" key={index}>
                {children(el, index)}
              </div>
              <div key={el.id} className="ImageBox">
                <img src={el.detail_image} alt="cartbookimage" />
              </div>
              <div className="Rental-TextInner">
                <span>{el.product_name}</span>
              </div>
              <div className="Rental-RentDay">
                <span>{el.rentdate}일</span>
              </div>
              <div className="Rental-PriceInner">
                <span>{formatter.format(el.price)}원</span>
              </div>
              <div className="RentButtonBox">
                <DeleteButton onDelete={() => RemoveBuyItem(el.product_no)} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default RentalItems;
