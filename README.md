# Modern Weather Dashboard 🌦️

A clean, minimal, and modern Weather Application built with **React**, **Tailwind CSS**, and **Lucide-React**. Designed with a premium "Glassmorphism" aesthetic and a "Bento Grid" layout for optimal data visualization.

## ✨ Features

- **Glassmorphism UI**: Soft gradients, backdrop blurs, and subtle inner shadows for a 2026-ready aesthetic.
- **Bento Grid Layout**: A highly structured dashboard showcasing current weather, wind speed, humidity, UV index, and more.
- **Dynamic Search**: Instantly find weather data for any city globally.
- **Live API Integration**: Powered by the OpenWeatherMap API for real-time accuracy.
- **Micro-animations**: Smooth entry transitions and floating effects using **Framer Motion**.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide-React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Source**: [OpenWeatherMap API](https://openweathermap.org/api)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishi-bathija/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Layout, BentoGrid, Tiles)
├── services/         # API service layer (OpenWeatherMap integration)
├── assets/           # Static assets and images
├── App.jsx           # Main application logic and layout assembly
└── index.css         # Global Tailwind v4 styles and theme configuration
```

---
*Created for an interview assignment - 2026 Standards.*
