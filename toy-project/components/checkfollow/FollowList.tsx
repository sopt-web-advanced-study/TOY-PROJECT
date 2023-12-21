'use client';

import ListElement from './ListElement';

interface userInfoTypes {
  id: number;
  userName: string;
  imageUrl: string;
}

/** dummy data */
const USER_INFO: userInfoTypes[] = [
  { id: 1, userName: 'aaaaaa', imageUrl: '' },
  { id: 2, userName: 'bbbbbb', imageUrl: '' },
  { id: 3, userName: 'cccccc', imageUrl: '' },
  { id: 4, userName: 'dddddd', imageUrl: '' },
  { id: 5, userName: 'eeeeee', imageUrl: '' },
  { id: 6, userName: 'ffffff', imageUrl: '' },
  { id: 7, userName: 'gggggg', imageUrl: '' },
  { id: 8, userName: 'hhhhhhh', imageUrl: '' },
  { id: 9, userName: 'iiiiiii', imageUrl: '' },
  { id: 10, userName: 'jjjjjj', imageUrl: '' },
  { id: 11, userName: 'kkkkkk', imageUrl: '' },
];

export default function FollowList() {
  return (
    <section className="commonBackground flex h-[480px] w-full flex-col">
      <div className="flex justify-end gap-[14px] px-[25px] py-[20px]">
        <button className="commonButton selectButtonTheme">✔️ 모두 선택</button>
        <button className="commonButton selectButtonTheme">모두 해지</button>
      </div>
      <div className="flex h-[350px] w-[340px] flex-col gap-[20px] overflow-scroll py-[5px]">
        {USER_INFO.map((userInfo: userInfoTypes) => {
          const { id, userName, imageUrl } = userInfo;
          return <ListElement key={id} id={id} userName={userName} imageUrl={imageUrl} />;
        })}
      </div>
    </section>
  );
}
