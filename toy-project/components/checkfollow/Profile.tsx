'use client';

import Image from 'next/image';

export default function Profiole() {
  return (
    <section className="p-y-[30px] p-x-[25px] commonBackground flex h-[150px] h-[150px] w-[340px] gap-[12px]">
      <div className="w-2/5 pl-[40px] pt-[28px]">
        <div className="absolute h-[90px] w-[90px] rounded-full bg-grey01">
          <Image
            src="/santahat.png"
            alt="산타모자"
            width={40}
            height={40}
            className="absolute left-[-5px] top-[-20px] rotate-[340deg]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-[12px]">
        <span className="text-title01">NAME</span>
        <span className="text-subTitle01">BIO</span>
        <div className="flex gap-[22px] ">
          <button className="commonButton h-[25px] w-[58px] bg-red text-white">팔로워 10</button>
          <button className="commonButton h-[25px] w-[58px] bg-green text-white">팔로잉 10</button>
        </div>
      </div>
    </section>
  );
}
