import getUser from "@/lib/getUser";
import React from "react";
import { UsersType } from "../../../type";
import Link from "next/link";

type Params = {
  params: {
    userId: string;
  };
};
type Props = {};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData = await getUser(userId);

  const content = (
    <div>
      <h1>{userData.name}</h1>
      <p>from :{userData.address.city}</p>
      <p>email :{userData.email}</p>
      <p>phone :{userData.phone}</p>
      <p>company:{userData.company.name}</p>
      <p>{userData.company.catchPhrase}</p>
    </div>
  );
  return (
    <div className="h-screen w-full bg-green-100 p-5">
      <nav className="w-full flex items-center justify-center gap-3">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/users">
          <p>users</p>
        </Link>
      </nav>
      {content}
    </div>
  );
};

export default UserPage;
