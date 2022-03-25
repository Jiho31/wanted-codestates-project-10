// action
const SET_SEARCH_KEYWORD = 'search/SET_SEARCH_KEYWORD';
const SET_RECOMMENDED_LIST = 'search/SET_RECOMMENDED_LIST';

// 기본 값
const initialState = {
  keyword: '',
  recommendedList: [],
};

// action 생성 함수
export const setSearchKeyword = (keyword) => ({
  type: SET_SEARCH_KEYWORD,
  keyword,
});

export const setRecommendedList = (data) => ({
  type: SET_RECOMMENDED_LIST,
  data,
});

// reducer

export default function search(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return { ...state, keyword: action.keyword };
    case SET_RECOMMENDED_LIST:
      return { ...state, recommendedList: action.data };
    default:
      return state;
  }
}
