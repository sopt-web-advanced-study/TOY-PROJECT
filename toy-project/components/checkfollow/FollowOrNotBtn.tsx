'use client';

import { followState } from '@/recoil/atoms';
import { useSetRecoilState } from 'recoil';

export default function FollowOrNotBtn() {
  const setBtnState = useSetRecoilState(followState);

  const onClickFollow = () => {
    setBtnState('follow');
  };

  const onClickNotFollow = () => {
    setBtnState('not');
  };

  return (
    <section className="flex justify-center gap-[50px] px-[65px] py-[15px]">
      <button className=" filteringFollowButton" onClick={onClickFollow}>
        맞팔한 사람
      </button>
      <button className=" filteringFollowButton" onClick={onClickNotFollow}>
        맞팔 아닌 사람
      </button>
    </section>
  );
}
