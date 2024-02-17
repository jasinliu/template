// 返回值类型
declare interface GlobalResponse<T> {
  code: number;
  data: T | null;
  message: string;
}

// 查询接口请求参数
declare interface SearchRequest {
  page: number;
  pageSize: number;
  keyword: string;
}

// 查询接口返回值
declare interface SearchResponse {
  nums: object;
  total: number;
  items: Array<object>;
}
