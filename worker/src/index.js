export default {
  async fetch(request, env) {
    // 1. Handle CORS preflight requests from the browser
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*", // Or restrict to your specific domain
          "Access-Control-Allow-Methods": "PUT, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // 2. Handle the PUT upload request
    if (request.method === "PUT") {
      const url = new URL(request.url);
      const filename = url.pathname.slice(1); // Extracts filename from /filename.jpg

      if (!filename) {
        return new Response("Missing filename in URL", { status: 400 });
      }

      try {
        // Stream the upload directly from the request body to the R2 Bucket
        await env.MY_BUCKET.put(filename, request.body);

        return new Response("Upload successful!", {
          status: 200,
          headers: { "Access-Control-Allow-Origin": "*" }
        });
      } catch (error) {
        return new Response(`Upload failed: ${error.message}`, { status: 500 });
      }
    }

    // Fallback response for other methods (GET, POST, etc.)
    return new Response("Send a PUT request with a filename in the URL path to upload.");
  },
};
