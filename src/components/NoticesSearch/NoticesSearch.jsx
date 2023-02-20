import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { setQueryValue } from 'redux/notices/searchQuerySlice';
import { selectNoticesSearchQuery } from 'redux/notices/selectors';

import { PageTitle } from 'components/PageTitle/PageTitle';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as ResetForm } from '../../assets/icons/resetForm.svg';
import {
  SearchBarWrap,
  SearchForm,
  SearchField,
  SearchBtn,
  InputLabel,
} from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNoticesSearchQuery);
  const [, setSearchParams] = useSearchParams();

  const windowWidth = useRef(window.innerWidth);
  const smallScreen = windowWidth.current < 768;

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Request to backend');

    setSearchParams(search.trim() !== '' ? { search } : {});
    dispatch(setQueryValue(''));
  };

  const handleInput = e => dispatch(setQueryValue(e.target.value));
  const handleReset = e => dispatch(setQueryValue(''));

  return (
    <SearchBarWrap>
      <PageTitle>Find your favorite pet</PageTitle>
      <SearchForm onSubmit={handleSubmit}>
        <InputLabel htmlFor="search">
          <SearchField
            onInput={handleInput}
            type="text"
            placeholder="Search"
            name="search"
            id="search"
            value={search}
          />
          <SearchBtn type={smallScreen ? 'submit' : 'button'}>
            {search && !smallScreen ? (
              <ResetForm onClick={handleReset} />
            ) : (
              <SearchIcon />
            )}
          </SearchBtn>
        </InputLabel>
      </SearchForm>
    </SearchBarWrap>
  );
};
