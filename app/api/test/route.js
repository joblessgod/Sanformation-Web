export async function GET(req) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code"); // Extract 'code' from query parameters
  console.log(code); // Log the extracted 'code'
  return new Response(`Code: ${code}`);
}
