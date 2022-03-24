import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

function SearchListContainer({ isLoading, keywordList }) {
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
    <Container className="search-list-container" ref={containerRef}>
      <Text>
        {isLoading
          ? '검색 중..'
          : keywordList.length > 0
          ? '추천 검색어'
          : '검색어 없음'}
      </Text>
      <List>
        {keywordList.map((keyword, idx) => {
          return (
            <ListItem
              key={keyword.id}
              keyword={keyword}
              isActive={idx === activeIndex}
              setActiveIndex={setActiveIndex}
              index={idx}
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

export default SearchListContainer;
