import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SearchBar from '../components/SearchBar';
import SearchListContainer from '../components/SearchListContainer';

function Main(props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleVisibility = (action) => {
    if (action === 'show') {
      document.querySelector('.search-list-container').style.visibility =
        'visible';
    } else if (action === 'hide') {
      setTimeout(() => {
        document.querySelector('.search-list-container').style.visibility =
          'hidden';
      }, 150);
    }
  };

  return (
    <Body>
      <Container>
        <Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <SearchBar
          setIsLoading={setIsLoading}
          handleVisibility={handleVisibility}
        />
        <SearchListContainer isLoading={isLoading} />
      </Container>
    </Body>
  );
}

const flexLayoutCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  ${flexLayoutCenter}

  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: #cae9ff;
`;

const Container = styled.section`
  ${flexLayoutCenter}

  width: 800px;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export default Main;
