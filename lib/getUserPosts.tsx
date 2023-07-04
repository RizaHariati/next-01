import { PostType, UsersType } from "@/type";

export default async function getUserPost(userId: string): Promise<PostType[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const resData = res.json();

  return resData;
}
