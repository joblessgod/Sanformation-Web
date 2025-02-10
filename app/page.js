import LoginWithGoogle from "@/components/LetSignIn/Google";
import { cookies } from "next/headers";
import Image from "next/image";

async function getUserData() {
  const token = await cookies().get("token")?.value;

  if (!token) return null;

  const userResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store", // Ensures fresh data
  });

  return userResponse.ok ? userResponse.json() : null;
}
export default async function Home() {
  const user = await getUserData();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">{`Hello ${user ? user.name : "Guest User!"}`}</h1>
      {user && <img src={user.picture} alt="Profile" />}


    </div>
  );
}

