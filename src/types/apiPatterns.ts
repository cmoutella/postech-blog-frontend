export interface SuccessResponse<T> {
  timestamp: Date;
  data: T;
}

export interface FailedResponse<T> {
  error: number;
  message: T;
}

export interface InterfaceList<T> {
  data: T[];
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}
