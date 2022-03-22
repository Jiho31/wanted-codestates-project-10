import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';

function SearchBar(props) {
  return (
    <Container>
      <SearchIcon fill="#32383E" />
      <SearchInput type="text" />
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
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 2rem 2.4rem;
`;

export default SearchBar;
