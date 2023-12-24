import { useRouter } from 'next/navigation';

export default function ConfirmFollowButton() {
  const router = useRouter();

  const handleOnclick = () => {
    router.push('/checkfollow');
  };
  return (
    <div className="commonFlex followBackButton  hover:bg-grey02" onClick={handleOnclick}>
      나의 맞팔 확인하러 가기
    </div>
  );
}
