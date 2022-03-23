import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import SearchBar from '../components/SearchBar';
import SearchListContainer from '../components/SearchListContainer';
import axios from 'axios';
import { PROXY } from '../utils/Utils';

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

function Main(props) {
  const [keyword, setKeyword] = useState('');
  const [recommendedList, setRecommendedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // api 호출
  useEffect(() => {
    const fetchKeywordAPI = async () => {
      setIsLoading(true);
      const recommendedKeywords = await axios
        .get(`${PROXY}/api/v1/search-conditions/?name=${keyword}`)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          return data.slice(0, 8);
        })
        .catch((err) => console.error(err));

      setIsLoading(false);
      setRecommendedList(recommendedKeywords);
    };

    if (keyword !== '') {
      fetchKeywordAPI();
    }
  }, [keyword]);

  const changeKeyword = (newKeyword) => {
    setKeyword(newKeyword);
  };

  return (
    <Body>
      <Container>
        <Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <SearchBar keyword={keyword} changeKeyword={changeKeyword} />
        <SearchListContainer
          isLoading={isLoading}
          keywordList={recommendedList}
        />
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
