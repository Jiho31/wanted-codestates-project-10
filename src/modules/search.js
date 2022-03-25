// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// 기본 값
const initialState = {
  keyword: '',
  recommendedList: [],
};

// const setSearchKeyword = createAction(
//   'search/set-search-keyword',
//   (keyword) => {
//     return {
//       keyword,
//     };
//   },
// );
// const setRecommendedList = createAction(
//   'search/set-recommended-list',
//   (data) => {
//     return { data };
//   },
// );

// const searchReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setSearchKeyword, (state, action) => {
//       state.keyword = action.keyword;
//     })
//     .addCase(setRecommendedList, (state, action) => {
//       state.recommendedList = action.data;
//     })
//     .addDefaultCase((state) => {
//       return state;
//     });
// });

/*
const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setSearchKeyword(state, action) {
      state.keyword = action.keyword;
    },
    setRecommendedList(state, action) {
      state.recommendedList = action.data;
    },
  },
});

const { actions, reducer } = searchSlice;
export const { setSearchKeyword, setRecommendedList } = actions;
export default reducer;
*/

// action
const SET_SEARCH_KEYWORD = 'search/SET_SEARCH_KEYWORD';
const SET_RECOMMENDED_LIST = 'search/SET_RECOMMENDED_LIST';

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
