import getAllUsers from "@/lib/getAllUsers";
import { UsersType } from "@/type";
import Link from "next/link";
import React from "react";

export default async function UsersPage() {
  const usersData: Promise<UsersType[]> = getAllUsers();
  const users = await usersData;
  console.log("hello");
  const content = (
    <section>
      {users.map((user: UsersType) => {
        return (
          <div>
            <Link href={`/users/${user.id}`}>
              <p>{user.name}</p>
            </Link>
          </div>
        );
      })}
    </section>
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-fuchsia-200">
      <h1>Users Page</h1>
      <Link href="/" className=" text-blue-600">
        <p>home</p>
      </Link>
      {content}
    </main>
  );
}
