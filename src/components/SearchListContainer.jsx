import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from '../assets/search-icon.svg';

function SearchListContainer(props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Text>{isLoading ? '검색 중..' : '추천 검색어'}</Text>
      <List>
        <ListItem>
          <Search />
          <p>무슨 무슨 암</p>
        </ListItem>
        <ListItem>
          <Search />
          <p>암암암</p>
        </ListItem>
        <ListItem>
          <Search />
          <p>암2</p>
        </ListItem>
        <ListItem>
          <Search />
          <p>암암3</p>
        </ListItem>
      </List>
    </Container>
  );
}

const Container = styled.div`
  width: 66rem;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem 2.4rem;
  margin-top: 1rem;

  font-size: 1.6rem;
  line-height: 1.2;
`;
const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #7d858b;
  padding: 0.7rem 0;
`;

const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1.2rem 0;

  svg {
    margin-right: 1.5rem;
  }
`;

export default SearchListContainer;
