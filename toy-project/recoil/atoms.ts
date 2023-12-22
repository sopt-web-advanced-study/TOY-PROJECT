import { ProfileType, followList } from '@/types/types';
import { atom } from 'recoil';

export const profileInfo = atom<ProfileType>({
  key: 'profileInfo',
  default: {
    login: '',
    avatar_url: '',
    bio: '',
    followers: 0,
    following: 0,
  },
});

export const followerList = atom<followList[]>({
  key: 'followerList',
  default: [{ id: 0, login: '', avatar_url: '' }],
});

export const followingList = atom<followList[]>({
  key: 'followingList',
  default: [{ id: 0, login: '', avatar_url: '' }],
});
