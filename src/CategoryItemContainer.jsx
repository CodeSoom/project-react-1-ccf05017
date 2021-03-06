import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from './slice';

import CategoryItem from './CategoryItem';

export default function CategoryItemContainer({ category }) {
  const dispatch = useDispatch();

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
  }

  const { selectedCategory } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
  }));

  const isSelected = (selectedCategory && selectedCategory.id) === category.id;

  return (
    <>
      <CategoryItem
        category={category}
        onClick={handleClick}
        isSelected={isSelected}
      />
    </>
  );
}
