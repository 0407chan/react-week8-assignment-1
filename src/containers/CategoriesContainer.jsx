import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';

import {
  selectCategory,
  loadRestaurants,
} from '../slice';

import { get } from '../utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      handleClick={handleClick}
    />
  );
}
