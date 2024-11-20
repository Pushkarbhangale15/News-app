# NewsMag - Your Daily Dose of Headlines 🌍

NewsMag is a responsive news application built with React and Bootstrap. It leverages the NewsAPI to fetch the latest headlines and organizes them into categories for a seamless browsing experience.

## Features

- **Dynamic Categories:** Explore news in categories such as Technology, Business, Health, Science, Sports, and Entertainment.
- **Live Updates:** Fetches top headlines from the United States in real-time.
- **Responsive Design:** Styled using Bootstrap for an optimal experience on any device.
- **Fallback Design:** Ensures content displays gracefully even when data is incomplete.

## Project Overview

### Components

- **Navbar.jsx**
  - Provides a responsive navigation bar to switch between categories dynamically.
  - Includes options like Technology, Business, Health, Science, Sports, and Entertainment.

- **NewsBoard.jsx**
  - Fetches news articles from the NewsAPI based on the selected category.
  - Displays articles using the NewsItem component in a clean, scrollable format.

- **NewsItem.jsx**
  - Represents individual news articles with a card layout.
  - Includes an image, a truncated title and description, and a "Read More" button linking to the full article.

### API Integration

- The app integrates with the NewsAPI to fetch real-time news headlines.
- Requires an API key, configured using environment variables.

## Setup Instructions

### Prerequisites

- Node.js installed
- A valid API key from NewsAPI

### Steps to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Pushkarbhangale15/news-mag.git
   cd news-mag
2. Install dependencies:
    ```bash
   npm install
3. Set up the API key:
-   Create a .env file in the project root.
-   Add the following line:
4. Start the application:
    ```bash
    npm start

## Technologies Used
- Frontend Framework: React
- Styling Framework: Bootstrap
- API Integration: NewsAPI
