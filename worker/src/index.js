export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "PUT, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method === "PUT") {
      const url = new URL(request.url);
      const filename = url.pathname.slice(1); 

      if (!filename) return new Response("Filename Required", { status: 400 });

      try {
        await env.MY_BUCKET.put(filename, request.body);
        return new Response("Object Synced Successfully", {
          status: 200,
          headers: { "Access-Control-Allow-Origin": "*" }
        });
      } catch (error) {
        return new Response(`Sync Failed: ${error.message}`, { status: 500 });
      }
    }

    return new Response("Pro Camera API Gateway Active.");
  },
};
