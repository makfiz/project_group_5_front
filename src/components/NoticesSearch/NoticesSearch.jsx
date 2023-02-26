import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

import { setQueryValue } from 'redux/notices/searchQuerySlice';
import { selectNoticesSearchQuery } from 'redux/notices/selectors';
import { searchParamsHandler } from 'utils';

import { PageTitle } from 'components/PageTitle/PageTitle';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';
import { ReactComponent as ResetForm } from 'assets/icons/resetForm.svg';
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
  const [value, setValue] = useState(search);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    searchParamsHandler(page, search, setSearchParams);

    return () => {
      debouncedHandleInput.cancel();
    };
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setQueryValue(e.currentTarget.elements.search.value.trim()));
    searchParamsHandler(page, search, setSearchParams);
  };

  const handleInput = e => {
    dispatch(setQueryValue(e.target.value.trim()));
    searchParamsHandler(page, search, setSearchParams);
  };
  const handleReset = e => {
    setValue('');
    dispatch(setQueryValue(''));
    searchParamsHandler(page, search, setSearchParams);
  };

  const debouncedHandleInput = useMemo(
    () => debounce(handleInput, 500),
    [search]
  );

  return (
    <SearchBarWrap>
      <PageTitle>Find your favorite pet</PageTitle>
      <SearchForm onSubmit={handleSubmit}>
        <InputLabel htmlFor="search">
          <SearchField
            onInput={debouncedHandleInput}
            onChange={e => setValue(e.target.value)}
            type="text"
            placeholder="Search"
            name="search"
            id="search"
            value={value}
          />
          <SearchBtn type="submit">
            {value.trim() ? (
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
