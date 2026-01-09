import { api } from "@/remote/axiosInstance";
import type { GetProductListResponse } from "../response/GetProductResponse";

export const getProductList = async (): Promise<GetProductListResponse[]> => {
  const res = await api.get<GetProductListResponse[]>('/product/all');
  return res.data;
}