import { createApp } from "./app.js";

const port = Number(process.env.PORT) || 4000;

createApp().listen(port, () => {
  console.log(`⚡ KAKX Arena API listening on http://localhost:${port}`);
  console.log(`   Health check: http://localhost:${port}/api/health`);
});
