import {
  CALLBACK_URL,
  CLIENT_ID,
  CLIENT_SECRETS,
  GITHUB_AUTH_CODE_SERVER,
  GITHUB_AUTH_TOKEN_SERVER,
} from '@/core/oauth';
import Image from 'next/image';

export default function LoginButton() {
  const AUTHORIZATION_CODE_URL = `${GITHUB_AUTH_CODE_SERVER}?client_id=${CLIENT_ID}&redirect_url=${CALLBACK_URL}`;

  async function fetchAccessToken(code: string) {
    try {
      const ACCESS_TOKEN_URL = `${GITHUB_AUTH_TOKEN_SERVER}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRETS}&code=${code}`;
      const response = await fetch(ACCESS_TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed access token');
      }

      const data = await response.json();
      console.log('Access Token:', data.access_token);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLoginButtonClick() {
    try {
      const location = new URL(window.location.href);
      const code = location.searchParams.get('code');

      if (code) {
        await fetchAccessToken(code);
      } else {
        window.location.assign(AUTHORIZATION_CODE_URL);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <article className="flex h-[4.8rem] w-[19.8rem] flex-col items-center">
        <p className="text-title01">OR</p>
        <p className="text-subTitle01">깃허브 로그인으로 간단하게 확인하기 ⬇️️</p>
      </article>
      <button
        onClick={handleLoginButtonClick}
        className="commonFlex commonButton h-[3rem] w-[14.1rem] gap-[1rem] bg-sub02 text-white hover:bg-grey02">
        <Image src="/github_emoji.svg" width={20} height={20} alt="깃허브 이모지" />
        깃허브로그인
      </button>
    </>
  );
}
