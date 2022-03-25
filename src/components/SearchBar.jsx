import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import axios from 'axios';
import { PROXY } from '../utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchKeyword, setRecommendedList } from '../modules/search';

const SearchBar = React.memo(function SearchBar({
  setIsLoading,
  handleVisibility,
}) {
  const keyword = useSelector((state) => state.search.keyword);
  const dispatch = useDispatch();
  let timerID;

  const checkLocalCache = (newKeyword) => {
    if (window.localStorage.getItem('searchKeywords')) {
      const localCache = JSON.parse(
        window.localStorage.getItem('searchKeywords'),
      );

      return localCache.hasOwnProperty(newKeyword);
    } else return false;
  };

  const inputChangeHandler = useCallback((e) => {
    const newKeyword = e.target.value;
    dispatch(setSearchKeyword(newKeyword));

    handleVisibility('show');

    // 디바운싱 적용한 api 호출 함수 실행
    clearTimeout(timerID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerID = setTimeout(() => {
      // 로컬 캐시에 키워드 검색 결과가 존재하는지 확인
      if (checkLocalCache(newKeyword)) {
        const localCache = JSON.parse(
          window.localStorage.getItem('searchKeywords'),
        );
        dispatch(setRecommendedList(localCache[newKeyword]));
      } else {
        // API 호출
        fetchKeywordAPI(newKeyword);
        // console.log('api 호출');
      }
    }, 350);
  }, []);

  const fetchKeywordAPI = async (newKeyword) => {
    setIsLoading(true);

    if (newKeyword === '') {
      dispatch(setRecommendedList([]));
      setIsLoading(false);
      return;
    }

    const recommendedKeywords = await axios
      .get(`${PROXY}/api/v1/search-conditions/?name=${newKeyword}`)
      .then((res) => res.data)
      .then((data) => {
        return data;
      })
      .catch((err) => console.error(err));

    // 리덕스 상태 값 업데이트
    dispatch(setRecommendedList(recommendedKeywords));

    // 로컬 스토리지에 값 저장
    const dataFromStorage = JSON.parse(
      window.localStorage.getItem('searchKeywords'),
    );
    window.localStorage.setItem(
      'searchKeywords',
      JSON.stringify({
        ...dataFromStorage,
        [newKeyword]: recommendedKeywords,
      }),
    );

    setIsLoading(false);
  };

  const focusEventHandler = () => {
    handleVisibility('show');
  };
  const blurEventHandler = () => {
    handleVisibility('hide');
  };
  const clickSearchBtnHandler = () => {
    if (keyword !== '') {
      window.location.href = `https://clinicaltrialskorea.com/studies?condition=${encodeURI(
        keyword,
      )}`;
    }
  };

  return (
    <Container>
      <div>
        <InputWrapper>
          <SearchIcon fill="#32383E" />
          <SearchInput
            value={keyword}
            onChange={inputChangeHandler}
            onFocus={focusEventHandler}
            onBlur={blurEventHandler}
            type="text"
            placeholder="질환명을 입력해 주세요."
          />
        </InputWrapper>
        <SearchButton onClick={clickSearchBtnHandler}>검색</SearchButton>
      </div>
    </Container>
  );
});

const Container = styled.div`
  width: 66rem;
  height: 6.48rem;
  font-size: 1.8rem;
  line-height: 1.6;
  font-weight: 400;
  border-radius: 42px;

  > div {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }
`;
const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2.4rem;
  background-color: #fff;
  border-radius: 42px 0 0 42px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 12px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 100%;
  line-height: 1.15;
  color: black;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: #b2b8bf;
  }
`;

const SearchButton = styled.button`
  // width: 6em;
  min-width: fit-content;
  background-color: #007be9;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.6;
  border-radius: 0 42px 42px 0;
  padding: 18px 32px;
  cursor: pointer;
`;

export default SearchBar;
