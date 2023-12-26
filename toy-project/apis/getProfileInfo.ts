import { ProfileType } from '@/types/types';
import axios from 'axios';
import { SetterOrUpdater } from 'recoil';

export const getProfileInfo = async (setUserInfo: SetterOrUpdater<ProfileType>, tokenValue: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${tokenValue}`,
      },
    });
    const { login, avatar_url, bio, following, followers } = response.data;
    setUserInfo({ login, avatar_url, bio, following, followers });
  } catch {
    console.error('error');
  }
};
