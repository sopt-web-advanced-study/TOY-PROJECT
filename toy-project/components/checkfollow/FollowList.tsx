'use client';

import { getFollowerList, getFollowingList } from '@/apis/getFollowList';
import { followerList, followingList } from '@/recoil/atoms';
import { followList } from '@/types/types';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import ListElement from './ListElement';

export default function FollowList() {
  const [followers, setFollowers] = useRecoilState(followerList);
  const [followings, setFollowings] = useRecoilState(followingList);

  useEffect(() => {
    getFollowingList(setFollowings);
    getFollowerList(setFollowers);
  }, []);

  return (
    <section className="commonBackground flex h-[480px] w-full flex-col">
      <div className="flex justify-end gap-[14px] px-[25px] py-[20px]">
        <button className="commonButton h-[25px] w-[65px] bg-white text-black hover:bg-red hover:text-white">
          ✔️ 모두 선택
        </button>
        <button className="commonButton h-[25px] w-[65px] bg-white text-black hover:bg-red hover:text-white">
          모두 해지
        </button>
      </div>
      <div className="flex h-[350px] w-[340px] flex-col gap-[20px] overflow-scroll py-[5px]">
        {followings.map((user: followList) => {
          const { id, login, avatar_url } = user;
          return <ListElement key={id} id={id} login={login} avatar_url={avatar_url} />;
        })}
      </div>
    </section>
  );
}
