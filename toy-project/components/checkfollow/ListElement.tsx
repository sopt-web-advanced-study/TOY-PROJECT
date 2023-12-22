'use client';

import { followList } from '@/types/types';
import Image from 'next/image';

export default function ListElement(props: followList) {
  const { id, login, avatar_url } = props;

  return (
    <li className="flex h-[40px] w-full items-center gap-[10px] px-[44px]">
      <i className="text-subTitle01">✔️</i>
      <Image src={avatar_url} alt="팔로우리스트-프로필이미지" width={40} height={40} className="rounded-full" />
      <span className="text-title01">{login}</span>
    </li>
  );
}
