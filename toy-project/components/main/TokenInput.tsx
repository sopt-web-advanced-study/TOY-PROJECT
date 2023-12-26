import { inputToken } from '@/recoil/atoms';
import { useSetRecoilState } from 'recoil';

export default function TokenInput() {
  const setInputToken = useSetRecoilState(inputToken);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputToken(e.target.value);
  };

  return (
    <input
      className="h-[4.5rem] w-[29.6rem] rounded-md border-2 border-grey01  pl-[0.5rem] text-subTitle01"
      placeholder="Github Token을 입력해주세요"
      type="text"
      onChange={handleOnChange}
    />
  );
}
