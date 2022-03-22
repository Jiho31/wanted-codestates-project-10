import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

function Main(props) {
  return (
    <Body>
      <Container>
        <Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <SearchBar />
      </Container>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #cae9ff;
`;

const Container = styled.section`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3.4rem;
`;

export default Main;
