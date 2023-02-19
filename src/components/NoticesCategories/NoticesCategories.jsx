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
  const isAuthorized = true;

  return (
    <Box display="flex" justifyContent="center">
      <CategoriesWrap>
        <CategoriesList>
          <CategoriesItem>
            <CategoryLink to="lost-found">lost/found</CategoryLink>
          </CategoriesItem>

          <CategoriesItem>
            <CategoryLink to="for-free">in good hands</CategoryLink>
          </CategoriesItem>

          <CategoriesItem>
            <CategoryLink to="sell">sell</CategoryLink>
          </CategoriesItem>

          {isAuthorized && (
            <>
              <CategoriesItem>
                <CategoryLink to="favorite">favorite ads</CategoryLink>
              </CategoriesItem>

              <CategoriesItem>
                <CategoryLink to="own">my ads</CategoryLink>
              </CategoriesItem>
            </>
          )}
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
