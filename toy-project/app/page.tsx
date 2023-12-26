'use client';

import MainContainer from '@/components/main/MainContainer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="commonFlex h-[84.4rem] w-[29.6rem] flex-col ">
        <Image
          className="commonFlex absolute left-[-1rem] top-[10rem] z-10"
          src="/santahat.png"
          alt="산타모자"
          height={186}
          width={140}
        />
        <MainContainer />
      </section>
    </>
  );
}
