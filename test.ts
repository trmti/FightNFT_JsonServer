import { serve } from 'https://deno.land/std@0.145.0/http/server.ts';

serve((req: Request) => {
  const url = new URL(req.url);
  if (url.pathname !== '/nft') {
    return new Response('Not Found', { status: 404 });
  }
  if (req.method !== 'GET') {
    return new Response('Bad Request', { status: 400 });
  }
  return Response.json({
    name: 'Fighter NFT',
    description: 'this is NFT for support a fighter',
    image: 'https://i.imgur.com/fAC700N.jpg',
    attributes: {},
  });
});
