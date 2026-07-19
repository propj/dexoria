import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import compression from "compression";

async function startServer() {
  const app = express();
  const PORT = 3000;

  const publicPath = path.join(process.cwd(), "public");
  const distPath = path.join(process.cwd(), "dist");

  // Gzip/Brotli compression for assets, JS chunks, and HTML responses
  app.use(compression());

  // Security Headers Middleware
  app.use((req, res, next) => {
    // Content Security Policy (CSP)
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://www.gstatic.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' data: https://fonts.gstatic.com; " +
      "img-src 'self' data: https: http:; " +
      "connect-src 'self' https: wss: ws:; " +
      "frame-src 'self' https:; " +
      "object-src 'none';"
    );

    // Prevent MIME-type sniffing
    res.setHeader("X-Content-Type-Options", "nosniff");

    // Clickjacking mitigation
    res.setHeader("X-Frame-Options", "SAMEORIGIN");

    // XSS protection trigger
    res.setHeader("X-XSS-Protection", "1; mode=block");

    // Cross-origin leakage mitigation
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

    // Permissions-Policy (Camera, mic, geolocation allowed only for self if needed)
    res.setHeader("Permissions-Policy", "camera=(self), microphone=(self), geolocation=(self)");

    // Strict-Transport-Security (HSTS)
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

    // Proper CORS configuration
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === "OPTIONS") {
      res.sendStatus(200);
      return;
    }

    next();
  });

  // Helper to send static files securely (try dist first, then public)
  const sendStaticOrPublicFile = (fileName: string, res: express.Response) => {
    res.sendFile(path.join(distPath, fileName), (err1) => {
      if (err1) {
        res.sendFile(path.join(publicPath, fileName), (err2) => {
          if (err2) {
            res.status(404).send("File not found");
          }
        });
      }
    });
  };

  // Serve sitemaps, robots.txt, and google validation files explicitly at the top level
  // This guarantees they are always served cleanly with 200 OK across both dev and prod
  app.get("/sitemap.xml", (req, res) => {
    sendStaticOrPublicFile("sitemap.xml", res);
  });

  app.get("/sitemap-:section.xml", (req, res) => {
    sendStaticOrPublicFile(`sitemap-${req.params.section}.xml`, res);
  });

  app.get("/robots.txt", (req, res) => {
    sendStaticOrPublicFile("robots.txt", res);
  });

  app.get("/googlea723545d2c8066e1.html", (req, res) => {
    sendStaticOrPublicFile("googlea723545d2c8066e1.html", res);
  });

  // Vite middleware setup or production static files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from dist/assets and other paths
    app.use(express.static(distPath));

    // Fallback all other routes to index.html for Client-Side SPA routing
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
