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
-   Get help on available commands using the command `/help`.

See the image below as an example:
[![Example image](https://i.postimg.cc/RVqv61bP/image.png)](https://postimg.cc/Tp8zBbxm)

###  🧪How To Use?

To begin using the BOT, follow these steps:

1.  Send a text message to the whatsapp number +55 (88) 98147-8937 or [click here](https://wa.me/558881478937?text=Hello).
    

2. The message will be forwarded to the ChatGPT API for an automatic response. When using the environment, please bear in mind that all sent and received messages are stored in a database. These messages will be kept until the `/clear` command is executed to clear the history.

Additionally, while using the ChatGPT API and Dall-E, keep in mind that the terms of use of [OpenAI]([https://beta.openai.com/terms/](https://beta.openai.com/terms/)) also apply. Please ensure to review and agree with these terms before using the API.

### 🛠️Installation and Configuration

To install and configure the API, follow the steps below:

1.  Create an account on OpenAI and grab your credentials. Create the `.env` file. The `.env.example` file is in the root of the project. See example below:

```
OPENAI_API_KE