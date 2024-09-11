// server.js
const express = require("express");
const path = require("path");
const { createServer } = require("vite");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from Vite build
app.use(express.static(path.join(__dirname, "dist")));

// Serve Vite’s development server during development
if (process.env.NODE_ENV === "development") {
  (async () => {
    const vite = await createServer({
      server: {
        middlewareMode: true,
      },
    });
    // Use Vite’s middleware
    app.use(vite.middlewares);
    app.listen(PORT, () => {
      console.log(`Development server running on port ${PORT}`);
    });
  })();
} else {
  // Serve the built files during production
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Production server running on port ${PORT}`);
  });
}
