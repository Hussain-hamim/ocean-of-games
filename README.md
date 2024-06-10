## [Live Demo](https://ocean-of-games.vercel.app/)

Sure! Here's a detailed `README.md` file that reflects the nature of the project as a clone of the RAWG website:

````markdown
# Game Platform Web Application

## Overview

Welcome to our Game Platform Web Application! This project is a clone of the popular RAWG website, designed to provide you with a comprehensive gaming experience. Whether you're into action-packed adventures, strategic mind-benders, or immersive RPGs, our app has got you covered. You can easily browse games by genre, select your preferred gaming platform, or search for your favorite titles. Powered by the RAWG API, we ensure you have access to the latest and greatest in the gaming world.

## Features

- **Browse by Genre**: Discover games across a variety of genres such as action, adventure, strategy, and more.
- **Select by Platform**: Filter games based on your favorite platform, whether it's PC, PlayStation, Xbox, or any other.
- **Search Games**: Use the search bar to quickly find the game you're looking for.
- **Game Details**: Get comprehensive details about each game, including critic scores, attributes, screenshots, and trailers.
- **Dark Mode**: Enjoy a visually pleasing dark theme, with your preference saved for future visits.

## Tech Stack

This project is built using the following technologies:

- **TypeScript**: For type safety and enhanced development experience.
- **React**: A JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library.
- **React Query**: For data fetching and caching.
- **React Router**: For declarative routing in React applications.

## Getting Started

To run this project on your local machine, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/game-platform-web-app.git
   cd game-platform-web-app
   ```
````

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm start
   ```

   Your app will be running at `http://localhost:3000`.

## Components Overview

### NavBar

Our `NavBar` keeps navigation simple and easy, so you can explore different parts of the app with ease.

### GameGrid

The `GameGrid` is the main attraction, displaying a collection of games based on your chosen filters and searches.

### GameHeading

The `GameHeading` component shows relevant headings to help you understand the context of the game listings.

### GenreList

With the `GenreList` component, you can explore games by different genres. Perfect for finding new favorites in your preferred categories.

### PlatformSelector

Use the `PlatformSelector` to filter games by the platform you prefer, whether it's PC, PlayStation, Xbox, or another.

### SortSelector

The `SortSelector` lets you sort games based on various criteria like popularity, release date, or rating.

### SearchInput

The `SearchInput` component makes it easy to find specific games quickly.

### CriticScore

See what the critics think with the `CriticScore` component, displaying scores for each game.

### GameAttributes

The `GameAttributes` component provides detailed information about each game, such as release date, genre, and platform.

### GameCard

The `GameCard` component presents game details in a neat, visually appealing format.

### GameScreenshot

Get a glimpse of the gameplay with the `GameScreenshot` component.

### GameTrailer

Watch game trailers directly within the app using the `GameTrailer` component.

## Data Fetching and Caching

Our app uses the RAWG API to fetch comprehensive game data. React Query handles data fetching and caching, ensuring a smooth and responsive experience.

## Dark Theme Support

Our app supports a dark theme to reduce eye strain and enhance your viewing experience. Your theme preference is saved for future visits.

## Contributing

We welcome contributions! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

A big thank you to the developers and contributors of the libraries and tools we use, and to the RAWG API for providing detailed game data.
