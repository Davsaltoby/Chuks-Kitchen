# Project Overview

Chuks-Kitchen is a responsive web application designed for a local food vendor. The website allows customers to:

- View available meals
- See pricing information
- Add items to cart
- Place food orders
- Contact the vendor

The goal of this project was to create a clean, user-friendly interface that improves customer engagement and simplifies ordering.

## Tech Stack

This project was built with **React.js and TailwindCSS**

React, a _JavaScript Library_ was used for this project because it is a Component Based Architecture, where reusable components can be made in order to avoid code repetiton for the same purpose.

Some of these reusable components, especially for this project includes:

- Button
- Input
- Logo
- Navigation
- Footer

React with Tailwind makes the code easier to manage, especially because Taiwind's syntax is written inline, and styling errors made can be easily tracked without having to go into a separate file.

## Project Structure

The project follows a modular structure to maintain scalability and readability:

- public/ – This folder contains static files and the root HTML file that can be displayed to the public.

- src/ – This is the main source code directory, where the code that powers the web applicatiion lives.

- assets/ – It contains images and static resources.

- components/ – It contains reusable UI components.

- pages/ – It contains route-level page components, where all the pages in this app resides.

- App.js – This contains the root application component for this project.

- main.jsx – This is the application entry point.

This structure promotes separation of concerns and improves maintainability.

## Design Interpretation

I started this project by looking up the design that was given to me to recreate on the web, for the layout and possible reusable components, so as to make my code as DRY (Don't Repeat Yourself) as possible.

I consequently drew out the structure of the pages and put together the HTML tags to be used as containers and those for the content, so as not to have problems when styling comes into the picture.

After all that was done, I created the React App for the project, downloaded the dependencies to be used, like; _react-router-dom_ for routing the pages, then I started to create the folders and files as needed. Then I began to code this amazing app.
