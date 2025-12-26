import { api } from '../axiosInstance';
import type { CreatePostRequest } from '../request/CreatePostRequest';
import type { GetPostResponse } from '../response/GetPostResponse';

export const getPosts = async (): Promise<GetPostResponse[]> => {
  const res = await api.get<GetPostResponse[]>('/posts');
  return res.data;
};
export const createNewPost = async (newPost: CreatePostRequest) => {
  const res = await api.post('/posts', newPost);
  return res.data;
};
