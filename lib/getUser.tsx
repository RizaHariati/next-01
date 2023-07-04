import { UsersType } from "@/type";

export default async function getUser(userId: string): Promise<UsersType> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const resData = res.json();

  return resData;
}
