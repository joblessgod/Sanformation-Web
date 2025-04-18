import React from "react";
const url = require("url");
const { default: axios } = require("axios");

export default function LoginButton() {
  return (
    <>
      <a href="https://discord.com/oauth2/authorize?client_id=1278404243061215384&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify+guilds+email">
        Login from DC
      </a>
      <a href="/api/test?code=BUYGGT76576H7">Test</a>
      <button
        className="hover:text-purple-500 hover:cursor-pointer"
      >
        Login
      </button>
    </>
  );
}
