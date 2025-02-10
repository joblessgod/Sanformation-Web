"use client";

const handleLogin = () => {

    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
    const NEXT_PUBLIC_GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI

    const googleAuthURL = new URL("https://accounts.google.com/o/oauth2/auth");
    googleAuthURL.searchParams.set("client_id", GOOGLE_CLIENT_ID);
    googleAuthURL.searchParams.set("redirect_uri", NEXT_PUBLIC_GOOGLE_REDIRECT_URI);
    googleAuthURL.searchParams.set("response_type", "code");
    googleAuthURL.searchParams.set("scope", "openid email profile");
    googleAuthURL.searchParams.set("access_type", "offline");
    googleAuthURL.searchParams.set("prompt", "consent"); // Force user to select account


    console.log("OAuth URL:", googleAuthURL.toString());
    window.location.href = googleAuthURL.toString();
};

export default function LoginWithGoogle() {
    return (
        <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:bg-white hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-300 hover:text-black hover:shadow transition duration-150" onClick={handleLogin}>
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
            <span>Login with Google</span>
        </button>

    );
}
