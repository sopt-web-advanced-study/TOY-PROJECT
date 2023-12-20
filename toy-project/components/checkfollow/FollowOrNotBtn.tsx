'use client';

export default function FollowOrNotBtn() {
  return (
    <section className="flex justify-center gap-[50px] px-[65px] py-[15px]">
      <button className=" filteringFollowButton hover:bg-green hover:text-white">맞팔한 사람</button>
      <button className=" filteringFollowButton hover:bg-green hover:text-white">맞팔 아닌 사람</button>
    </section>
  );
}
