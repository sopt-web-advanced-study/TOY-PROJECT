import { ProfileType } from '@/types/types';
import axios from 'axios';
import { SetterOrUpdater } from 'recoil';

const GIT_TOKEN = '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';

export const getProfileInfo = async (setUserInfo: SetterOrUpdater<ProfileType>) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GIT_TOKEN}`,
      },
    });
    const { login, avatar_url, bio, following, followers } = response.data;
    setUserInfo({ login, avatar_url, bio, following, followers });
  } catch {
    console.error('error');
  }
};
