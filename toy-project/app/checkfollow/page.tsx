'use client';

import FollowList from '@/components/checkfollow/FollowList';
import { RecoilRoot } from 'recoil';
import FollowOrNotBtn from '../../components/checkfollow/FollowOrNotBtn';
import Profile from '../../components/checkfollow/Profile';

export default function CheckFollow() {
  return (
    <RecoilRoot>
      <article className="flex flex-col px-[25px] py-[37px]">
        <Profile />
        <FollowOrNotBtn />
        <FollowList />
        <button className="mt-[34px] h-[45px] rounded-[5px] border-2 border-solid border-grey02 bg-sub01 text-title01 text-white hover:bg-grey02">
          맞팔하기
        </button>
      </article>
    </RecoilRoot>
  );
}
