import React from 'react'

const user = () => {
  return (
    <div>user</div>
  )
}

export default user

// import { cookies } from "next/headers";

// export async function GET() {
//     const token = await cookies().get("token")?.value;

//     if (!token) {
//         return Response.json({ error: "User not authenticated" }, { status: 401 });
//     }

//     try {
//         const userResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
//             headers: { Authorization: `Bearer ${token}` },
//         });

//         const userData = await userResponse.json();
//         return Response.json(userData);
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//         return Response.json({ error: "Failed to retrieve user data" }, { status: 500 });
//     }
// }
