import React, { useState } from 'react';
import { Item } from '../CartPage';
import { CheckOneFunction, CheckTwoFunction } from '../CartItems/CartItems';

function useCheckButton() {
  const [selectedItem, setSelectedItem] = useState<Item[]>([]);

  const checkOne: CheckOneFunction = (event, buyItem, gubun) => {
    const checkedValue = event.target.checked;
    const filteredItems = buyItem.filter((item) => item.gubun === gubun);

    if (checkedValue) {
      const combinedItems = new Set([...selectedItem, ...filteredItems]);
      setSelectedItem(Array.from(combinedItems));
    } else {
      const remainingItems = selectedItem.filter(
        (item) =>
          !filteredItems.some(
            (filteredItem) => filteredItem.product_no === item.product_no
          )
      );
      setSelectedItem(remainingItems);
    }
    const updatedCheckedItems = checkedValue
      ? filteredItems.map((_, index) => index)
      : [];
    return updatedCheckedItems;
  };

  const checkTwo: CheckTwoFunction = (event, checkedItems, el) => {
    const itemId = parseInt(event.target.name);
    let updatedCheckedItems: number[] = [];
    let updatedItems: Item[] = [];
    if (event.target.checked) {
      updatedCheckedItems = [...checkedItems, itemId];
      updatedItems = [...selectedItem, el];
    } else {
      updatedCheckedItems = checkedItems.filter((id) => id !== itemId);
      updatedItems = selectedItem.filter(
        (item) => item.product_no !== el.product_no
      );
    }
    setSelectedItem(updatedItems);
    return updatedCheckedItems;
  };

  return { selectedItem, checkOne, checkTwo };
}

export default useCheckButton;
