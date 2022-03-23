import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from '../assets/search-icon.svg';

function ListItem({ keyword, isActive }) {
  useEffect(() => {
    // console.log(index + 'list item is rendered');
    // console.log(isActive);
  });

  return (
    <List className={isActive ? 'isActive' : ''}>
      <Search />
      <p>{keyword.name}</p>
    </List>
  );
}

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 1.2rem 0.4rem;
  cursor: pointer;

  svg {
    margin-right: 1.5rem;
  }

  &.isActive {
    background-color: #efefef;
  }
  :hover {
    background-color: #efefef;
  }
`;

export default ListItem;
