import React from 'react';
import { useRef, useState } from 'react';

import {
  SearchForm,
  SearchField,
  SearchBtn,
  InputLabel,
} from './NewsForm.styled';

import { ReactComponent as SearchIcon } from '../../../assets/icons/searchIcon.svg';
import { ReactComponent as ResetForm } from '../../../assets/icons/resetForm.svg';

export const NewsForm = ({onSubmit, onClear}) => {
  const [value, setValue] = useState('');
  const windowWidth = useRef(window.innerWidth);
  const smallScreen = windowWidth.current < 768;

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e);
  };
  
  const handleClear = e => {
    setValue('');
    onClear();
  }
  return (
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
              <ResetForm onClick={handleClear} />
            ) : (
              <SearchIcon />
            )}
          </SearchBtn>
        </InputLabel>
      </SearchForm>
  );
};