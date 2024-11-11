# Gedi Car Catalogue Project

The **Gedi Car Catalogue Project** is a React application showcasing a list of cars, allowing users to filter by category, view details, and navigate through sections using a custom navbar and footer. This README provides an overview of key React concepts used, including `useState`, `useEffect`, props, component structure, and CSS styling.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Components](#components)
4. [React Hooks](#react-hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
5. [Props and Data Flow](#props-and-data-flow)
6. [Styling](#styling)
7. [Usage](#usage)
8. [Conclusion](#conclusion)

---

## Project Overview

The Gedi Car Catalogue provides users with an intuitive UI to:
- Browse cars by category (e.g., SUV, Sedan, Coupe).
- View car details including price, EMI options, and specifications.
- Navigate through the application using a responsive navbar and footer.

---

## Key Features

- **Catalogue Filtering**: Filter cars by category (e.g., SUV, Sedan).
- **Detailed Car View**: See detailed information about each car, including specifications.
- **Responsive Design**: Optimized for various screen sizes with a responsive layout.
- **Navbar and Footer**: Custom components to navigate and display information.

---

## Components

The project is organized into reusable React components:

1. **Navbar** - Top navigation bar for easy access to different sections.
2. **Catalogue** - Displays a list of cars with category filters.
3. **CarCard** - Represents individual car items in the catalogue.
4. **SingleCarView** - Shows detailed information about the selected car.
5. **Footer** - A footer with links and site information.

---

## React Hooks

### useState
The `useState` hook manages the dynamic state within each component:
- **In `Catalogue`**:
  - `cars`: Stores the entire list of cars fetched from an external source.
  - `activeCategory`: Holds the currently selected category for filtering.
  - `filteredCars`: Stores the filtered list based on the selected category.

Example:
```javascript
const [cars, setCars] = useState([]);
const [activeCategory, setActiveCategory] = useState("all");
const [filteredCars, setFilteredCars] = useState([]);
```
## useEffect

The `useEffect` hook handles side effects, such as fetching data or updating filtered lists.

### In `Catalogue`:
- `useEffect` is used to load car data on component mount and to update the `filteredCars` list whenever `activeCategory` changes.

Example:
```javascript
useEffect(() => {
  // Fetch car data on initial load
  const fetchData = async () => {
    const data = await fetchCars(); // Placeholder for actual fetch function
    setCars(data);
  };
  fetchData();
}, []);

useEffect(() => {
  setFilteredCars(
    activeCategory === "all" ? cars : cars.filter(car => car.category === activeCategory)
  );
}, [activeCategory, cars]);
```
---

## Props and Data Flow
Props allow components to pass data and functions to child components, enabling modular and reusable UI elements.

- Catalogue passes individual car data to CarCard.
- SingleCarView uses props to display selected car details.
- Props ensure data consistency across components while following React’s unidirectional data flow.

Example:
```javascript
<CarCard key={car.id} car={car} />
```

## Styling
The project uses custom CSS for layout and Bootstrap for additional styling. Key styling elements include:
- Responsive Design: Ensures proper display across devices.
- Custom Navbar and Footer: Custom components for navigation and information display.
- Dynamic Catalogue Layout: Grid layout that adjusts based on screen size.

Example:
```css
.footer {
    background-color: #222;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
}
```
## Usage
To run the project locally:

1. Clone the repository.
2. Install dependencies with npm install.
3. Start the app with npm start.

## Conclusion
he Gedi Car Catalogue Project provides a comprehensive view of using React for a dynamic, responsive UI. By leveraging useState, useEffect, props, and component-based design, this project demonstrates essential React skills for modern web applications.
