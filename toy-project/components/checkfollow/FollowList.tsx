'use client';

import { getFollowerList, getFollowingList } from '@/apis/getFollowList';
import { checkState, followState, followerList, followingList } from '@/recoil/atoms';
import { followList } from '@/types/types';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ListElement from './ListElement';

export default function FollowList() {
  const [followers, setFollowers] = useRecoilState(followerList);
  const [followings, setFollowings] = useRecoilState(followingList);
  const followBtnState = useRecoilValue(followState);
  const setCheckState = useSetRecoilState(checkState);

  useEffect(() => {
    getFollowingList(setFollowings);
    getFollowerList(setFollowers);
  }, []);

  const followerID = followers.map(user => user.id);
  const followingID = followings.map(user => user.id);

  const followEachOther = followings.filter(user => {
    return followerID.includes(user.id) && user;
  });

  const notFollowEachOther = followers.filter(user => {
    return !followingID.includes(user.id) && user;
  });

  const onClickCheck = () => {
    setCheckState(true);
  };

  const onClickRemove = () => {
    setCheckState(false);
  };

  useEffect(() => {
    onClickRemove();
  }, [followBtnState]);

  return (
    <section className="commonBackground flex h-[480px] w-full flex-col">
      <div className="flex justify-end gap-[14px] px-[25px] py-[20px]">
        <button
          className="commonButton h-[25px] w-[65px] bg-white text-black hover:bg-red hover:text-white"
          onClick={onClickCheck}>
          ✔️ 모두 선택
        </button>
        <button
          className="commonButton h-[25px] w-[65px] bg-white text-black hover:bg-red hover:text-white"
          onClick={onClickRemove}>
          모두 해지
        </button>
      </div>
      <div className="flex h-[350px] w-[340px] flex-col gap-[20px] overflow-scroll py-[5px]">
        {followBtnState === 'follow'
          ? followEachOther.map((user: followList) => {
              const { id, login, avatar_url } = user;
              return <ListElement key={id} id={id} login={login} avatar_url={avatar_url} />;
            })
          : notFollowEachOther.map((user: followList) => {
              const { id, login, avatar_url } = user;
              return <ListElement key={id} id={id} login={login} avatar_url={avatar_url} />;
            })}
      </div>
    </section>
  );
}
