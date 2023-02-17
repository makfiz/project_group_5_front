import React from 'react';
import { useRef, useState } from 'react';
import {
  SearchBarWrap,
  Title,
  SearchForm,
  SearchField,
  SearchBtn,
  InputLabel,
} from './NoticesSearch.styled';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as ResetForm } from '../../assets/icons/resetForm.svg';

export const NoticesSearch = () => {
  const [value, setValue] = useState('');
  const windowWidth = useRef(window.innerWidth);
  const smallScreen = windowWidth.current < 768;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Відправити запит на бекенд із ${value}`);
    setValue('');
  };
  return (
    <SearchBarWrap>
      <Title>Find your favorite pet</Title>
      <SearchForm onSubmit={handleSubmit}>
        <InputLabel htmlFor="search">
          <SearchField
            onInput={e => setValue(e.target.value.trim())}
            type="text"
            placeholder="Search"
            name="search"
            id="search"
            value={value}
          />
          <SearchBtn type={smallScreen ? 'submit' : 'button'}>
            {value && !smallScreen ? (
              <ResetForm onClick={() => setValue('')} />
            ) : (
              <SearchIcon />
            )}
          </SearchBtn>
        </InputLabel>
      </SearchForm>
    </SearchBarWrap>
  );
};
