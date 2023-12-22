import { followList } from '@/types/types';
import axios from 'axios';
import { SetterOrUpdater } from 'recoil';

const PER_PAGE = 100;

export const getFollowingList = async (setFollowings: SetterOrUpdater<followList[]>) => {
  try {
    const followingData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/following?per_page=${PER_PAGE}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
      },
    });

    const { id, login, avatar_url } = followingData.data;
    setFollowings([{ id, login, avatar_url }]);
  } catch {
    console.error('error');
  }
};
export const getFollowerList = async (setFollowers: SetterOrUpdater<followList[]>) => {
  try {
    const followerData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/followers?per_page=${PER_PAGE}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
      },
    });
    const { id, login, avatar_url } = followerData.data;
    setFollowers([{ id, login, avatar_url }]);
    return followerData.data;
  } catch {
    console.error('error');
  }
};
