# ShoppingCart-React

## Description

The ShoppingCart-React project is a web application that fetch a list of products from an API, enabling users to filter products by minimum price and category. Users can add products to their cart, remove items from the cart, clear the entire cart, modify the quantity of each product in the cart, and dynamically calculates the subtotal of the products in the cart in real-time. The web application is fully responsive, following the Mobile-First methodology.

## Technologies Used

- React: The project is built using the React JavaScript library, which facilitates the development of dynamic user interfaces.
- Vite: Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- CSS Modules: CSS Modules are employed for styling to ensure a modular and maintainable design.

## Project Purpose

The primary goal of the **ShoppingCart-React** project is to apply and showcase the usage of React's `useContext`, `useReducer`, and `useId` hooks, in addition to making API requests using the Fetch API.

- **useContext:** It is a React Hook that enables reading and subscribing to a context from your component. Context allows specific information from the parent component to be accessible to any component in the tree below it, regardless of its depth, without explicitly passing the information via props.

- **useReducer:** This Hook allows the management of complex states and serves as an alternative to `useState`. It empowers us to define actions that change the state in a more controlled manner. By utilizing `useReducer`, we define a reducer function that takes the current state and an action, returning a new state.

## Features

- **Fetch** product data from an **API**.
- **Filters** products by minimum price and category.
- **Adds** products to the shopping cart.
- **Removes** products from the cart.
- **Clears** the entire shopping cart.
- **Modifies** the quantity of each product in the cart.
- **Real-time calculation** of the **subtotal** for items in the cart.

## Online Demo

To experience the **ShoppingCart-React** project in action, please visit the online demo at [Demo Link](#)
