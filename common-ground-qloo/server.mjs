import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 3000);
const publicDir = join(process.cwd(), "public");
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8" };

createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  if (url.pathname === "/api/qloo") {
    if (!process.env.QLOO_API_KEY) return response.end(JSON.stringify({ mode: "demo" }));
    const query = new URLSearchParams({ "filter.type": "urn:entity:artist", take: "8" });
    try {
      const upstream = await fetch(`https://api.qloo.com/v2/insights/?${query}`, { headers: { "X-Api-Key": process.env.QLOO_API_KEY } });
      response.writeHead(upstream.status, { "content-type": "application/json" });
      return response.end(await upstream.text());
    } catch (error) {
      response.writeHead(502, { "content-type": "application/json" });
      return response.end(JSON.stringify({ error: "Qloo request failed", detail: error.message }));
    }
  }
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const file = normalize(join(publicDir, pathname));
  if (!file.startsWith(publicDir)) return response.writeHead(403).end("Forbidden");
  try {
    response.writeHead(200, { "content-type": mime[extname(file)] || "application/octet-stream" });
    response.end(await readFile(file));
  } catch { response.writeHead(404).end("Not found"); }
}).listen(port, () => console.log(`Common Ground is live at http://localhost:${port}`));
