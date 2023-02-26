import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
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
import { AddModalNotice } from 'components/AddModalNotice/AddModalNotice';
import { useNavigate } from 'react-router';

export const NoticesCategories = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(prev => {
      return !prev;
    });
  };

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

          {isLoggedIn && (
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
        <AddPetBtn
          type="button"
          onClick={e => {
            e.preventDefault();
            token ? handleModalToggle() : navigate('/login');
          }}
        >
          <AddPetBtnIconWrap>
            <PlusIcon />
          </AddPetBtnIconWrap>
        </AddPetBtn>
        {isModalOpen && (
          <AddModalNotice handleModalToggle={handleModalToggle} />
        )}
      </CategoriesWrap>
    </Box>
  );
};
