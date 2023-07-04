import getUser from "@/lib/getUser";
import React from "react";
import { PostType, UsersType } from "../../../type";
import Link from "next/link";
import getUserPost from "@/lib/getUserPosts";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const singleUser: Promise<UsersType> = getUser(userId);
  const userData: UsersType = await singleUser;
  return {
    title: userData.name,
    description: `this is the page of ${userData.name}`,
  };
}

const UserPage = async ({ params: { userId } }: Params) => {
  const singleUser: Promise<UsersType> = getUser(userId);

  const gettingPosts: Promise<PostType[]> = getUserPost(userId);

  const [userData, userPosts] = await Promise.all([singleUser, gettingPosts]);
  const user = (
    <div>
      <h1>{userData.name}</h1>
      <p>from :{userData.address.city}</p>
      <p>email :{userData.email}</p>
      <p>phone :{userData.phone}</p>
      <p>company:{userData.company.name}</p>
      <p>{userData.company.catchPhrase}</p>
    </div>
  );

  const post = userPosts.map((post: PostType) => {
    return (
      <div key={post.id} className="text-slate-500">
        <Link href={`/users/${userId}/posts`}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.body}</p>
      </div>
    );
  });
  return (
    <div className="h-full w-full bg-green-100 p-5 max-w-2xl mx-auto">
      <nav className="w-full flex items-center justify-center gap-3">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/users">
          <p>users</p>
        </Link>
      </nav>
      {user}
      <h2 className="mt-10">{userData.name}'s Posts:</h2>
      {post}
    </div>
  );
};

export default UserPage;
