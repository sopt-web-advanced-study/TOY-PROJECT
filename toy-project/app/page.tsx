'use client';

import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <section className="commonBackground commonFlex h-[480px] w-[340px]">
          <button className="commonFlex followBackButton ">나의 맞팔 확인, 맞팔하기 버튼 </button>
          <button className="commonFlex commonButton h-[30px] w-[30px] bg-red">팔로잉 </button>
          <h1 className="text-white">gd</h1>
        </section>
      </RecoilRoot>
    </>
  );
}
