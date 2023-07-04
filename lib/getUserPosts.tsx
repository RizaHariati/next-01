import { UsersType } from "@/type";

export default async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const resData: UsersType[] | any = res.json();

  return resData;
}
