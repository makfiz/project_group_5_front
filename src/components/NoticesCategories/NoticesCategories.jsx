import React from 'react';
import { Box } from 'components/Box/Box';
import {
  CategoriesWrap,
  CategoriesList,
  CategoriesItem,
  CategoryLink,
  AddPetBtn,
  AddPetBtnIconWrap,
} from './NoticesCategories.styled';
import { ReactComponent as PlusIcon } from '../../assets/icons/plusIcon.svg';

export const NoticesCategories = () => {
  return (
    <Box display="flex" justifyContent="center">
      <CategoriesWrap>
        <CategoriesList>
          <CategoriesItem>
            <CategoryLink to="lost_found">lost/found</CategoryLink>
          </CategoriesItem>

          <CategoriesItem>
            <CategoryLink to="in_good_hands">in good hands</CategoryLink>
          </CategoriesItem>

          <CategoriesItem>
            <CategoryLink to="sell">sell</CategoryLink>
          </CategoriesItem>

          <CategoriesItem>
            <CategoryLink to="favorite_ads">favorite ads</CategoryLink>
          </CategoriesItem>

          <CategoriesItem>
            <CategoryLink to="my_ads">my ads</CategoryLink>
          </CategoriesItem>
        </CategoriesList>
        <AddPetBtn type="button">
          Add pet
          <AddPetBtnIconWrap>
            <PlusIcon />
          </AddPetBtnIconWrap>
        </AddPetBtn>
      </CategoriesWrap>
    </Box>
  );
};
