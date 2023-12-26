import axios from 'axios';

export const client = (userToken: string) =>
  axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${userToken}`,
    },
  });
