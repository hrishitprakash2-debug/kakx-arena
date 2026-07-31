import { createApp } from "../src/app.js";

// Vercel serverless entry — the Express app is exported as a handler.
// (Only used when the backend is deployed to Vercel; `npm run dev` /
// `npm start` uses src/index.ts instead.)
export default createApp();
