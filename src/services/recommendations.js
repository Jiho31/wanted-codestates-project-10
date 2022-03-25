import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recommendationsAPI = createApi({
  reducerPath: 'recommendationsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '/proxy/api/v1/search-conditions/' }), // https://api.clinicaltrialskorea.com/
  endpoints: (builder) => ({
    getRecommendsByKeyword: builder.query({
      query: (keyword) => `?name=${keyword}`,
    }),
  }),
});

export const { useGetRecommendsByKeyword } = recommendationsAPI;
