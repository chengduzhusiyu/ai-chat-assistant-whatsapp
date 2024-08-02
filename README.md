# <center> 🤖 AI Chat Assistant for WhatsApp </center>

This is a personal project that utilizes the whatsapp-web.js library and the GPT-3.5 Turbo model to automate WhatsApp messages responses and use Dall-E to generate images from prompts.

## 🛠️ Technologies Used
The bot was developed using the following technologies:

-   NestJS - Provides a scalable architecture for server app development.
-   Prisma - ORM that makes database interactions easier.
-   PostgreSQL - Open source relational database.
-   OpenAI API - API for natural language processing and artificial intelligence.
-   TypeScript - A JavaScript superset that adds static typing to the language.
-   Fastify - Used as an adapter with NestJS focusing on performance and scalability.

### 🚀Features

-   Conversation utilizing the power of ChatGPT by just sending messages through WhatsApp.
-   Image generation using the command `/imagine your prompt`.
-   Clear the message history from the database using the command `/clear`.
-   Get help on