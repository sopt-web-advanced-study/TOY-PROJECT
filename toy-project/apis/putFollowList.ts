import { client } from './create';

export const putFollowList = async (username: string, tokenValue: string) => {
  try {
    const res = await client(tokenValue).put(`/user/following/${username}`);
    if (res.status === 204) {
      location.reload();
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
