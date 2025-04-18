<img width="1618" alt="Screenshot 2024-10-10 at 9 05 44 AM" src="https://github.com/user-attachments/assets/78e2d6d8-136a-4f78-8bfa-93bee4c45baf" />

# Culina AI 🍽️✨

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-Latest-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Material UI](https://img.shields.io/badge/Material%20UI-5.16.7-blueviolet)

> **Your AI‑powered sous‑chef for discovering mouth‑watering recipes and planning delicious meals!** 🧑‍🍳

---

## 📋 Table of Contents

- [🌟 Overview](#🌟-overview)
- [🛠️ Tech Stack](#🛠️-tech-stack)  
  - [🔧 Backend](#🔧-backend)  
  - [🎨 Frontend](#🎨-frontend)  
- [📡 API Endpoints](#📡-api-endpoints)  
  - [🔗 Backend](#🔗-backend-api)  
  - [🔗 Frontend](#🔗-frontend-api)  
- [🗺️ Roadmap](#🗺️-roadmap)

---

## 🌟 Overview

Culina AI is an intelligent recipe platform that leverages generative AI to craft custom recipes based on the ingredients you have, your cuisine preferences, and any dietary restrictions. Whether you’re staring at your pantry wondering “What can I make?”, or planning a full week’s menu, Culina AI has you covered. 🍳🥗

---

## 🔄 Flow Diagram

```
┌──────────┐    ┌───────────────┐    ┌──────────────┐    ┌───────────┐
│  Client  │───>│GenAIController│─-> │ RecipeService│───>│  OpenAI   │
│  Request │    │   REST API    │    │   Prompt     │    │  Language │
└──────────┘    └───────────────┘    │  Engineering │    │   Model   │
                                     └──────────────┘    └───────────┘
                                           │                   │
                                           │                   ▼
                                           │              ┌───────────┐
                                           └──────────────│  Recipe   │
                                                          │  Response │
                                                          └───────────┘
```
### 🛠️ Key Components

1. **GenAIController** 🚪  
   - `/api/ask-ai` 💬 – General AI conversational endpoint  
   - `/api/recipe-generator` 🍽️ – Specialized recipe generation endpoint

2. **RecipeService** ❤️  
   - Transforms user ingredients, cuisine preferences, and dietary restrictions into structured recipe prompts  
   - Uses prompt engineering 🎯 to generate consistent, high‑quality recipe outputs  
   - Returns complete recipes with ingredients list 📝 and cooking instructions 👩‍🍳

3. **ChatService** 🗨️  
   - Provides general conversational capabilities for cooking‑related questions  
   - Direct integration with language models via Spring AI's `ChatModel` interface 🤖  
   - Handles general cooking knowledge queries beyond recipe generation

### 🤖 AI Integration

- 🎨 Uses structured prompt templates to ensure consistent recipe formatting  
- 🔄 Maintains conversation context for coherent multi‑turn interactions  
- ⚙️ Optimizes prompts for detailed, usable recipes rather than generic responses  


## 🛠️ Tech Stack

### 🔧 Backend

- **Language:** Java 17  
- **Framework:** Spring Boot + Spring AI  
- **Authentication:** Google OAuth 2.0 🔐  
- **Containerization:** Docker 🐳  
- **AI Integration:** OpenAI API via Spring AI 🤖  

### 🎨 Frontend

- **Library:** React 18.3.1 ⚛️  
- **UI Framework:** Material UI 5.16.7 📐  
- **Animations:** Framer Motion 11.3.19 ✨  
- **Styling:** FontAwesome, Open Sans & Roboto (via Fontsource) 🎨  
- **State Management:** React Context & Hooks 🔄  
- **API:** Spoonacular Food API (for discovery) 🍲  
- **Build & Lint:** React Scripts 5.0.1, ESLint 🛡️  

---

## 📡 API Endpoints

### 🔗 Backend API

| Method | Endpoint                   | Description                                  |
| ------ | -------------------------- | -------------------------------------------- |
| POST   | `/api/ask-ai`              | General AI conversational endpoint 💬        |
| POST   | `/api/recipe-generator`    | Generate a recipe from ingredients & params 🍽️ |

### 🔗 Frontend / Public API

| Method | Endpoint                           | Description                          |
| ------ | ---------------------------------- | ------------------------------------ |
| GET    | `/recipes/complexSearch`           | Search recipes with filters 🔍       |
| GET    | `/recipes/{id}/information`        | Get recipe details 📄                |
| GET    | `/recipes/{id}/nutritionWidget`    | Fetch nutrition data 🥦             |
| GET    | `/food/ingredients/search`         | Find ingredients by name 🥕          |
| GET    | `/recipes/findByIngredients`       | Match recipes by ingredient list 📝  |

---

## 🗺️ Roadmap

- 🔐 **User Authentication** — Save favorites & meal plans  
- 📅 **Meal Planner & Calendar** — Weekly/monthly views  
- 🛒 **Shopping List Generator** — Auto‑generate lists  
- 📤 **Social Sharing** — Share recipes & plans  
- ❤️ **Recipe Collections & Tags** — Organize your favorites  

---
