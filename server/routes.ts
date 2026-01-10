import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail } from "./email";
import { z } from "zod";

// Validation schema for contact form data
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Send email
      const success = await sendContactFormEmail(validatedData);
      
      if (success) {
        return res.status(200).json({ 
          success: true, 
          message: "Your message has been sent successfully!" 
        });
      } else {
        return res.status(500).json({ 
          success: false, 
          message: "Unable to send your message. Please try again later." 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      
      // Handle validation errors
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map(e => e.message).join(", ");
        return res.status(400).json({ 
          success: false, 
          message: `Validation error: ${errorMessages}` 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
