import { ProfileType } from '@/types/types';
import axios from 'axios';
// import { selector } from 'recoil';
import { SetterOrUpdater } from 'recoil';

export const getProfileInfo = async (setUserInfo: SetterOrUpdater<ProfileType>) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
      },
    });
    const { login, avatar_url, bio, following, followers } = response.data;
    setUserInfo({ login, avatar_url, bio, following, followers });
  } catch {
    console.error('error');
  }
};

// export const getProfileInfo = selector({
//   key: 'getProfileInfo',
//   get: async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
//         headers: {
//           Accept: 'application/vnd.github+json',
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('무슨 에러?:', error);
//       throw error;
//     }
//   },
// });
