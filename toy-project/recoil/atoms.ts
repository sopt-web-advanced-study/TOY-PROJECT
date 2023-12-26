import { ProfileType, followList } from '@/types/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

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

export const followState = atom<string>({
  key: 'followState',
  default: 'follow',
});

export const checkState = atom<boolean>({
  key: 'checkState',
  default: false,
});

export const inputToken = atom<string>({
  key: 'inputToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const loginClick = atom<string>({
  key: 'loginClick',
  default: ' ',
});
