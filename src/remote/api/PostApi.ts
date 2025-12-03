import { api } from '../axiosInstance';
import type { PostRequest } from '../request/PostRequest';
import type { PostResponse } from '../response/PostResponse';

export const getPosts = async (): Promise<PostResponse[]> => {
  const res = await api.get<PostResponse[]>('/posts');
  return res.data;
};
export const postNewPost = async (newPost: PostRequest): Promise<PostResponse> => {
  const res = await api.post<PostResponse>('/posts', newPost);
  return res.data;
};
