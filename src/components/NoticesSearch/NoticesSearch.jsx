import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { setQueryValue } from 'redux/notices/searchQuerySlice';
import { selectNoticesSearchQuery } from 'redux/notices/selectors';
import { searchParamsHandler } from 'utils/fetchNoticesRoute';

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
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    searchParamsHandler(page, search, setSearchParams);
    return () => {};
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setQueryValue(e.currentTarget.elements.search.value.trim()));
    searchParamsHandler(page, search, setSearchParams);
  };
  const handleInput = e => {
    dispatch(setQueryValue(e.target.value));
    searchParamsHandler(page, search, setSearchParams);
  };
  const handleReset = e => {
    dispatch(setQueryValue(''));
    searchParamsHandler(page, search, setSearchParams);
  };

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
          <SearchBtn type="submit">
            {search ? <ResetForm onClick={handleReset} /> : <SearchIcon />}
          </SearchBtn>
        </InputLabel>
      </SearchForm>
    </SearchBarWrap>
  );
};
