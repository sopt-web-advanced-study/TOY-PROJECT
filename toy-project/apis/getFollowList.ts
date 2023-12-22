import { FollowUserType, followList } from '@/types/types';
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

    const data = followingData.data;

    const followingList = data.map((user: FollowUserType) => {
      const { id, login, avatar_url } = user;
      return { id, login, avatar_url };
    });

    setFollowings(followingList);
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
    const data = followerData.data;

    const followerList = data.map((user: FollowUserType) => {
      const { id, login, avatar_url } = user;
      return { id, login, avatar_url };
    });

    setFollowers(followerList);
  } catch {
    console.error('error');
  }
};
