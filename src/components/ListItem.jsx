import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from '../assets/search-icon.svg';

const ListItem = React.memo(function ListItem({
  keyword,
  isActive,
  setActiveIndex,
  index,
}) {
  useEffect(() => {
    // console.log(index + 'list item is rendered');
    // console.log(isActive);
  });

  const mouseEnterHandler = (e) => {
    // console.log(e.target.querySelectorAll('p')[0].textContent);
    // console.log(e.target.querySelectorAll('.hidden-index')[0].textContent);

    setActiveIndex(
      e.target.querySelectorAll('.hidden-index')[0].textContent * 1,
    );
  };

  const clickEventHandler = (e) => {
    // input의 keyword 값 바꾸기!
  };

  return (
    <List
      className={isActive ? 'isActive' : ''}
      onMouseEnter={mouseEnterHandler}
      onClick={clickEventHandler}
    >
      <Search />
      <p>{keyword.name}</p>
      <Index className="hidden-index">{index}</Index>
    </List>
  );
});

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
const Index = styled.div`
  visibility: hidden;
`;

export default ListItem;
