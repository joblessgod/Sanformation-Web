import { cookies } from "next/headers";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
    const NEXT_PUBLIC_GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI

    if (!code) {
        return Response.json({ error: "Authorization code is missing" }, { status: 400 });
    }

    try {
        const tokenURL = "https://oauth2.googleapis.com/token";
        const params = new URLSearchParams({
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            redirect_uri: NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
            grant_type: "authorization_code",
            code,
        });

        const tokenResponse = await fetch(tokenURL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
        });

        const tokenData = await tokenResponse.json();

        if (!tokenData.access_token) {
            console.error("OAuth Token Error:", tokenData);
            return Response.json({ error: "Failed to obtain access token" }, { status: 400 });
        }   

        cookies().set("token", tokenData.access_token, { httpOnly: true });
        return Response.redirect(new URL("/", req.url));

        // const userResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        //     headers: { Authorization: `Bearer ${tokenData.access_token}` },
        // });

        // const userData = await userResponse.json();
        // return Response.json(userData);
        
        
    } catch (error) {
        console.error("OAuth Callback Error:", error);
        return Response.json({ error: "OAuth callback failed" }, { status: 500 });
    }
}
