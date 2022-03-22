import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';

function SearchBar(props) {
  return (
    <Container>
      <div>
        <InputWrapper>
          <SearchIcon fill="#32383E" />
          <SearchInput type="text" placeholder="질환명을 입력해 주세요." />
        </InputWrapper>
        <SearchButton>검색</SearchButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 66rem;
  height: 6.48rem;
  font-size: 1.8rem;
  line-height: 1.6;
  font-weight: 400;
  border-radius: 42px;

  > div {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }
`;
const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2.4rem;
  background-color: #fff;
  border-radius: 42px 0 0 42px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 12px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 100%;
  line-height: 1.15;
  color: black;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: #b2b8bf;
  }
`;

const SearchButton = styled.button`
  // width: 6em;
  min-width: fit-content;
  background-color: #007be9;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.6;
  border-radius: 0 42px 42px 0;
  padding: 18px 32px;
  cursor: pointer;
`;

export default SearchBar;
