'use client';

interface userInfoTypes {
  id: number;
  userName: string;
  imageUrl: string;
}

export default function ListElement(props: userInfoTypes) {
  const { id, userName, imageUrl } = props;

  return (
    <li className="flex h-[40px] w-full items-center gap-[27px] px-[44px]">
      {/* <Image src={imageUrl} alt="팔로우리스트-프로필이미지" width={40} height={40} className="rounded-full" /> */}
      <div className="h-[40px] w-[40px] rounded-full bg-grey01"></div>
      <span className="text-title01">{userName}</span>
    </li>
  );
}
