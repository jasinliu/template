import request from '@/utils/request';

export const getSearch = (data: object) => {
  return request<SearchResponse>({
    url: '/search',
    method: 'post',
    data: data,
  });
};
