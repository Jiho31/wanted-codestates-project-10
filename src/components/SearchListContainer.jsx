import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from '../assets/search-icon.svg';
import ListItem from './ListItem';

const dummyList = [
  {
    id: 125,
    name: "Klatskin's tumor",
  },
  {
    id: 133,
    name: '간세포암',
  },
  {
    id: 187,
    name: '갑상선암종',
  },
  {
    id: 335,
    name: '고환암',
  },
  {
    id: 375,
    name: '뼈암',
  },
  {
    id: 445,
    name: '구강암',
  },
  {
    id: 449,
    name: '치은암',
  },
];

function SearchListContainer(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [keywordList, setKeywordList] = useState(dummyList);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef();

  const keypressEventHandler = (e) => {
    if (activeIndex === -1 && e.key === 'ArrowUp') return;
    if (activeIndex === -1 && e.key === 'ArrowDown') {
      // 드롭다운 열기
      containerRef.current.style.visibility = 'visible';

      // 인덱스 값 0으로 설정
      setActiveIndex(0);

      return;
    }

    if (e.key === 'ArrowUp') {
      setActiveIndex((currIdx) => {
        return currIdx > 0 ? currIdx - 1 : currIdx + keywordList.length - 1;
      });
    } else if (e.key === 'ArrowDown') {
      setActiveIndex((currIdx) => {
        return currIdx < keywordList.length - 1
          ? currIdx + 1
          : currIdx - keywordList.length + 1;
      });
    } else if (e.key === 'Enter') {
      console.log('Enter pressed');
      // input 요소의 값 변경하고 포커스 맞춰주기 (?)
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keypressEventHandler);

    return () => {
      window.removeEventListener('keydown', keypressEventHandler);
    };
  }, [activeIndex]);

  useEffect(() => {}, [activeIndex]);

  return (
    <Container ref={containerRef}>
      <Text>{isLoading ? '검색 중..' : '추천 검색어'}</Text>
      <List>
        {keywordList.map((keyword, idx) => {
          // console.log(idx);
          return (
            <ListItem
              key={keyword.id}
              keyword={keyword}
              isActive={idx === activeIndex}
            />
          );
        })}
      </List>
    </Container>
  );
}

const Container = styled.div`
  visibility: hidden;
  width: 66rem;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem 2.2rem;
  margin-top: 0.9rem;

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

// const ListItem = styled.li`
//   display: flex;
//   align-items: center;
//   padding: 1.2rem 0.4rem;
//   cursor: pointer;

//   svg {
//     margin-right: 1.5rem;
//   }

//   :hover {
//     background-color: #efefef;
//   }
// `;

export default SearchListContainer;
