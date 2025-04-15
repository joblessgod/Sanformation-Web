import axios from "axios";

export async function GET(req) {
  try {
    const { code } = req;

    if (code) {
      const formData = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        code: code.toString(),
        redirected_uri: "http://localhost:3000/api/auth/callback/discord",
      });

      const output = await axios.post(
        "https://discord.com/api/v10/oauth2/token",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (output.data) {
        const access = output.data.access_token;

        const userInfo = await axios.get(
          "https://discord.com/api/v10//users/@me",
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        );
        console.log(output.data, userInfo.data);
        new Response("JSON.stringify(output.data, userInfo.data)");
      }
    }
  } catch (error) {
    return console.log("Error: ", error);
  }
}
