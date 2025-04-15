export async function GET(req) {
  const { code } = req;
  console.log(req);
  new Response("code");
}
