import express from "express";
import cors from "cors";
import {
  siteConfig,
  sports,
  timeSlots,
  gallery,
  reviews,
  stats,
  marqueeItems,
  faqs,
  areas,
  whatsappLink,
} from "./data/content.js";
import { recordBooking, recordContact } from "./store.js";

/**
 * Shared Express app — used by both the standalone server (index.ts)
 * and the Vercel serverless entry (../api/index.ts).
 */
export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ---- public content API (mirrors frontend/src/data/site.ts) ----
  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, service: "kakx-arena-backend", time: new Date().toISOString() });
  });

  app.get("/api/site", (_req, res) => {
    res.json(siteConfig);
  });

  app.get("/api/sports", (_req, res) => {
    res.json(sports);
  });

  app.get("/api/timeslots", (_req, res) => {
    res.json(timeSlots);
  });

  app.get("/api/gallery", (_req, res) => {
    res.json(gallery);
  });

  app.get("/api/reviews", (_req, res) => {
    res.json(reviews);
  });

  app.get("/api/stats", (_req, res) => {
    res.json(stats);
  });

  app.get("/api/marquee", (_req, res) => {
    res.json(marqueeItems);
  });

  app.get("/api/faqs", (_req, res) => {
    res.json(faqs);
  });

  app.get("/api/areas", (_req, res) => {
    res.json(areas);
  });

  app.get("/api/whatsapp-link", (req, res) => {
    const message = typeof req.query.message === "string" ? req.query.message : "Hi KAKX Arena!";
    res.json({ link: whatsappLink(message) });
  });

  // ---- booking / contact intake (persisted to JSON files) ----
  app.post("/api/booking", (req, res) => {
    const { sport, date, slot, name } = req.body ?? {};
    if (!sport || !date || !slot) {
      res.status(400).json({ ok: false, error: "sport, date and slot are required" });
      return;
    }
    const record = recordBooking({ sport, date, slot, name: name || "", source: "website" });
    res.status(201).json({ ok: true, id: record.id, received: record.receivedAt });
  });

  app.post("/api/contact", (req, res) => {
    const { name, phone, message } = req.body ?? {};
    if (!name || !message) {
      res.status(400).json({ ok: false, error: "name and message are required" });
      return;
    }
    const record = recordContact({ name, phone: phone || "", message });
    res.status(201).json({ ok: true, id: record.id, received: record.receivedAt });
  });

  app.get("/", (_req, res) => {
    res.json({
      service: "KAKX Arena API",
      endpoints: [
        "GET  /api/health",
        "GET  /api/site",
        "GET  /api/sports",
        "GET  /api/timeslots",
        "GET  /api/gallery",
        "GET  /api/reviews",
        "GET  /api/stats",
        "GET  /api/marquee",
        "GET  /api/faqs",
        "GET  /api/areas",
        "POST /api/booking  { sport, date, slot, name? }",
        "POST /api/contact  { name, phone?, message }",
      ],
    });
  });

  return app;
}
