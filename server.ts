import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Vite middleware setup or production static files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");

    // Serve sitemaps and robots.txt explicitly to avoid any SPA interference
    app.get("/sitemap.xml", (req, res) => {
      res.sendFile(path.join(distPath, "sitemap.xml"));
    });
    
    app.get("/sitemap-:section.xml", (req, res) => {
      const section = req.params.section;
      res.sendFile(path.join(distPath, `sitemap-${section}.xml`));
    });

    app.get("/robots.txt", (req, res) => {
      res.sendFile(path.join(distPath, "robots.txt"));
    });

    app.get("/googlea723545d2c8066e1.html", (req, res) => {
      res.sendFile(path.join(distPath, "googlea723545d2c8066e1.html"));
    });

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
