'use client';

import FollowList from '@/components/checkfollow/FollowList';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import FollowOrNotBtn from '../../components/checkfollow/FollowOrNotBtn';
import Profile from '../../components/checkfollow/Profile';
import { putFollowList } from '@/apis/putFollowList';
import { followState, inputToken, loginClick } from '@/recoil/atoms';

export default function CheckFollow() {
  const loginClickState = useRecoilValue(loginClick);
  const inputTokenValue = useRecoilValue(inputToken);
  const setFollowState = useSetRecoilState(followState);

  async function handleFllow(username: string) {
    const success = await putFollowList(username, inputTokenValue);
    if (success) {
      setFollowState('follow');
      window.location.reload();
    }
  }

  return (
    <article className="flex flex-col px-[25px] py-[37px]">
      <Profile />
      <FollowOrNotBtn />
      <FollowList />
      <button
        onClick={() => handleFllow(loginClickState)}
        className="mt-[34px] h-[45px] rounded-[5px] border-2 border-solid border-grey02 bg-sub01 text-title01 text-white hover:bg-grey02">
        맞팔하기
      </button>
    </article>
  );
}
