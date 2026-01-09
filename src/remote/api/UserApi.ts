import type { UserDomain } from '@/domain/Uesr';
import supabase from '../Supabase';
import { api } from '../axiosInstance';
import type { GetUserResponse } from '../response/getUserResponse';
import { toUserDomain } from '../mapper/UserMapper';

export const getUserId = async (): Promise<string> => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('사용자 정보를 가져오는 중 오류 발생:', error.message);
    throw error;
  }

  if (user) {
    return user.id;
  }

  throw new Error();
};

export const getUserData = async (id: string): Promise<UserDomain> => {
  const res = await api.get<GetUserResponse>(`/user/${id}`);
  return toUserDomain(res.data);
}
