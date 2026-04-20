export async function POST(req: Request) {
  const { prompt } = await req.json();

  return Response.json({
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  });
}
