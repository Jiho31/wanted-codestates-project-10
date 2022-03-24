import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import SearchBar from '../components/SearchBar';
import SearchListContainer from '../components/SearchListContainer';
import axios from 'axios';
import { PROXY } from '../utils/Utils';

function Main(props) {
  const [keyword, setKeyword] = useState('');
  const [recommendedList, setRecommendedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // // api 호출
  // useEffect(() => {
  //   const fetchKeywordAPI = async () => {
  //     setIsLoading(true);
  //     const recommendedKeywords = await axios
  //       .get(`${PROXY}/api/v1/search-conditions/?name=${keyword}`)
  //       .then((res) => res.data)
  //       .then((data) => {
  //         console.log(data);
  //         return data.slice(0, 8);
  //       })
  //       .catch((err) => console.error(err));

  //     setIsLoading(false);
  //     setRecommendedList(recommendedKeywords);
  //   };

  //   if (keyword !== '') {
  //     fetchKeywordAPI();
  //   }
  // }, [keyword]);

  const fetchKeywordAPI = async (newKeyword) => {
    setIsLoading(true);
    const recommendedKeywords = await axios
      .get(`${PROXY}/api/v1/search-conditions/?name=${newKeyword}`)
      .then((res) => res.data)
      .then((data) => {
        return data.slice(0, 8);
      })
      .catch((err) => console.error(err));

    setIsLoading(false);
    setRecommendedList(recommendedKeywords);
    console.log('실행');
  };

  const handleVisibility = (action) => {
    if (action === 'show') {
      document.querySelector('.search-list-container').style.visibility =
        'visible';
    } else if (action === 'hide') {
      document.querySelector('.search-list-container').style.visibility =
        'hidden';
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
          keyword={keyword}
          setKeyword={setKeyword}
          fetchKeywordAPI={fetchKeywordAPI}
          setIsLoading={setIsLoading}
          setRecommendedList={setRecommendedList}
          handleVisibility={handleVisibility}
        />
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
