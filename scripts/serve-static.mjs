import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const base = resolve(".");
const types = {".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json; charset=utf-8",".svg":"image/svg+xml"};
const port = Number.parseInt(process.env.PORT || "4000",10);
createServer(async (req,res) => {
  const path = new URL(req.url || "/", "http://localhost").pathname;
  let decoded;
  try { decoded = decodeURIComponent(path); } catch {res.writeHead(400).end("Bad request");return;}
  const target = resolve(base, "." + decoded, decoded.endsWith("/") ? "index.html" : "");
  if (!(target===base || target.startsWith(base+sep))) {res.writeHead(403).end("Forbidden");return;}
  try {
    if (!(await stat(target)).isFile()) throw new Error("Not a file");
    const data = await readFile(target);
    res.writeHead(200,{"Content-Type":types[extname(target)]||"application/octet-stream","Cache-Control":"no-store"});
    res.end(data);
  } catch {res.writeHead(404).end("Not found");}
}).listen(port, () => console.log("Water study available at http://localhost:"+port));
