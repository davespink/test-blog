/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        switch (url.pathname) {
            case '/message':
                return new Response('Hello, World!');
            case '/random':
                return new Response(crypto.randomUUID());
            case '/posts/1':
                return new Response(`
                    <div id="div1">

                        <div class="post-image"><img src="/images/piano.jpg" alt="Example"></div>
                        <div class="post-headline">Example Headline</div>
                        <div class="post-text">This is the content of post 1.</div>
                    </div>
                `, { headers: { 'Content-Type': 'text/html' } });
            default:
                return new Response('Not Found', { status: 404 });
        }
    },
};