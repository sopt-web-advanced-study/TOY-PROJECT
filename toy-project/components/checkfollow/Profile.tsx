'use client';

import { getProfileInfo } from '@/apis/getProfileInfo';
import { profileInfo } from '@/recoil/atoms';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function Profile() {
  const [userInfo, setUserInfo] = useRecoilState(profileInfo);

  useEffect(() => {
    getProfileInfo(setUserInfo);
  }, []);

  const { login, bio, avatar_url, followers, following } = userInfo;

  return (
    <section className="p-y-[30px] p-x-[25px] commonBackground flex h-[150px] h-[150px] w-[340px] gap-[12px]">
      <div className="w-2/5 pl-[40px] pt-[28px]">
        {/* <Image src={avatar_url} alt="프로필이미지" width={90} height={90} className="relative rounded-full" />
        <Image
          src="/santahat.png"
          alt="산타모자"
          width={40}
          height={40}
          className="absolute left-[-5px] top-[-20px] rotate-[340deg]"
        /> */}
      </div>
      <div className="flex flex-col justify-center gap-[12px]">
        <span className="text-title01">{login}</span>
        <span className="text-subTitle01">{bio}</span>
        <div className="flex gap-[22px] ">
          <button className="commonButton h-[25px] w-[58px] bg-red text-white">팔로워 {followers}</button>
          <button className="commonButton h-[25px] w-[58px] bg-green text-white">팔로잉 {following}</button>
        </div>
      </div>
    </section>
  );
}
