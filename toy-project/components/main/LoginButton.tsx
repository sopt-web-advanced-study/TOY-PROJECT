import Image from 'next/image';

export default function LoginButton() {
  return (
    <>
      <article className=" flex h-[4.8rem] w-[19.8rem] flex-col items-center ">
        <p className="text-title01">OR</p>
        <p className="text-subTitle01">깃허브 로그인으로 간단하게 확인하기 ⬇️️</p>
      </article>
      <button className="commonFlex commonButton h-[3rem] w-[14.1rem] gap-[1rem]  bg-sub02">
        <Image src="/github_emoji.svg" width={20} height={20} alt="깃허브 이모지" />
        깃허브로그인
      </button>
    </>
  );
}
