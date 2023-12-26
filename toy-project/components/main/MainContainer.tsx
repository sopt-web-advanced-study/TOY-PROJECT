import TokenMakeButton from './TokenMakeButton';
import TokenInput from './TokenInput';
import LoginButton from './LoginButton';
import UserCheckText from './UserCheckText';
import ConfirmFollowButton from './ConfirmFollowButton';

export default function MainContainer() {
  return (
    <section className="commonFlex maincontainer commonBackground h-[45rem] w-[34rem] flex-col gap-[22px]">
      <TokenMakeButton />
      <UserCheckText />
      <TokenInput />
      <ConfirmFollowButton />
      <LoginButton />
    </section>
  );
}
