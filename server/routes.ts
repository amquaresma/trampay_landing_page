import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactMessageSchema.parse(req.body);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER || "trampayapp@gmail.com",
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: validatedData.email,
        to: "trampayapp@gmail.com",
        subject: `Contato via Landing Page - ${validatedData.name}`,
        html: `
          <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #2C5F7C; padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: #FDB913; margin: 0; font-size: 24px;">Nova Mensagem - Trampay</h1>
            </div>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 0 0 10px 10px;">
              <p style="margin: 0 0 10px;"><strong>Nome:</strong> ${validatedData.name}</p>
              <p style="margin: 0 0 10px;"><strong>Email:</strong> ${validatedData.email}</p>
              <p style="margin: 0 0 10px;"><strong>Mensagem:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #FDB913;">
                ${validatedData.message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
        `,
        text: `
          Nome: ${validatedData.name}
          Email: ${validatedData.email}
          Mensagem: ${validatedData.message}
        `,
      };

      if (process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to trampayapp@gmail.com");
      } else {
        console.log("Email credentials not configured. Message received:", validatedData);
        console.log("To enable email sending, set EMAIL_USER and EMAIL_PASS environment variables");
      }

      res.json({ 
        success: true, 
        message: "Mensagem recebida com sucesso!" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ 
          success: false, 
          message: "Dados invalidos. Por favor, verifique os campos." 
        });
        return;
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Erro ao processar mensagem. Tente novamente." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
