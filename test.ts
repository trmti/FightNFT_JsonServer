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
    name: 'test',
    description: 'sample text',
    image: 'https://i.imgur.com/TySZlZ5.jpg',
    attributes: {},
  });
});
