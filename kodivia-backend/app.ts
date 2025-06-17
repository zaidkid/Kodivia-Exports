import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
// @ts-ignore
import { Server, Socket } from 'socket.io';


import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Rule-based chatbot replies
const faqResponses: Record<string, string> = {
export: "We specialize in exporting a diverse selection of Indian products, including premium textiles, handcrafted artifacts, aromatic spices, ayurvedic products, and fresh agricultural commodities such as rice, pulses, and fresh produce. Every item is sourced through a rigorous quality process from reputed suppliers across India to meet global standards.",
documents: "For international exports, essential documents include a commercial invoice, packing list, bill of lading, and a certificate of origin. Additionally, based on the product category, we also provide regulatory documents like phytosanitary certificates, FSSAI approvals, fumigation reports, and export licenses to ensure smooth customs clearance in all destination countries.",
location: "Our headquarters is located in Barabanki, India, at the heart of the nation’s commercial network. We operate through major Indian ports such as Mumbai (Nhava Sheva), Mundra, and Chennai, which allows us to manage fast and efficient logistics to nearly any part of the world.",
ship: "Yes, we ship globally to over 50 countries including the USA, UAE, Germany, UK, Canada, Australia, and Africa. Whether by sea, air, or express courier, we partner with trusted logistics providers to offer flexible shipping options based on your timeline and budget preferences.",
quote: "To receive a personalized quotation, please provide product details, required quantity, target destination, and your preferred mode of transport. This helps us calculate exact freight charges, documentation requirements, and delivery timelines. Our team typically responds with a detailed export proposal within 24 business hours.",
services: "We provide complete export solutions — from sourcing and product customization to secure packaging, labeling, document preparation, customs clearance, and final international delivery. Our goal is to simplify your global trade experience by acting as your reliable export partner every step of the way."
};

// WebSocket handler
io.on('connection', (socket: Socket) => {
  console.log('✅ Chat client connected');

  socket.on('message', (data: any) => {
    try {
      // ✅ Safe check for proper object structure
      if (!data || typeof data.text !== 'string') {
        socket.emit('message', {
          text: "Invalid message format received.",
          sender: 'bot'
        });
        return;
      }

      const userMsg = data.text.toLowerCase();

      let botReply = "Sorry, I didn't understand that. Please ask about our services, exports, or shipping.";

      for (const keyword in faqResponses) {
        if (userMsg.includes(keyword)) {
          botReply = faqResponses[keyword];
          break;
        }
      }

      socket.emit('message', {
        text: botReply,
        sender: 'bot'
      });

    } catch (error) {
      console.error("❌ Error handling message:", error);
      socket.emit('message', {
        text: "Oops! Something went wrong on the server.",
        sender: 'bot'
      });
    }
  });

  socket.on('disconnect', () => {
    console.log('❌ Chat client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
