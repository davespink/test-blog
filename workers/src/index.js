export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (!env.ASSETS) {
      return new Response('Error: env.ASSETS is undefined. Check wrangler.jsonc site.bucket and main field.', { status: 500 });
    }
    try {
      console.log(url)

      if (url.pathname === '/' || url.pathname === '/index.html') {
        return env.ASSETS.fetch(new Request('index.html', request));
      }
      if (url.pathname.startsWith('/posts/') || url.pathname.startsWith('/images/')) {
        return env.ASSETS.fetch(request);
      }
      return new Response('Not Found', { status: 404 });
    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  },
};