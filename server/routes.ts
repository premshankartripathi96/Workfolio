import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      const savedContact = await storage.saveContactMessage(contactData);
      
      return res.status(200).json({
        success: true,
        message: "Contact message received successfully",
        data: savedContact,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message,
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "Failed to process contact message",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
