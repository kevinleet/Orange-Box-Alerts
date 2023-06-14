# Orange Box Alerts

Orange Box Alerts is a full stack web application designed to provide users with real-time notifications for product restocks on the Hermes web store. Users can conveniently log in via Google OAuth 2.0, subscribe to product alerts, make payments securely using Stripe, and customize their notification settings from the user panel.

This application was developed in just one week and is currently fully deployed at [www.orangeboxalerts.com](http://www.orangeboxalerts.com). It serves as a web scraper that regularly scans the Hermes web store to detect new product restocks. To overcome any anti-bot detection measures implemented by the web store, Orange Box Alerts utilizes Zenrows, a module designed to defeat such measures and ensure accurate restock notifications.

![Screenshot](https://github.com/kevinleet/Orange-Box-Alerts/blob/main/client/src/images/screenshot.png?raw=true)

## Features

- User authentication: Users can log in to the application using their Google accounts via OAuth 2.0.
- Subscription management: Users can subscribe to product restock alerts, enabling them to receive notifications when products become available.
- Payment integration: Stripe integration allows users to securely make payments for subscription plans.
- Automated restock scanning: The application frequently scans the Hermes web store for new product restocks, ensuring timely notifications to subscribed users.
- Responsive user interface: The application provides an intuitive and user-friendly interface built with React and Bootstrap, making it accessible across various devices.

## Technologies Used

Orange Box Alerts utilizes the following technologies:

- **Express**: A fast and minimalist web framework for Node.js, used for building the server-side of the application.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB, simplifying interactions with the database.
- **MongoDB Atlas**: A cloud database service, used to store user information, subscription details, and product data.
- **Nodemailer**: A module for sending emails from Node.js applications, utilized for sending notifications to users.
- **Axios**: A popular HTTP client for making API requests, used for scanning the Hermes web store for product restocks.
- **React**: A JavaScript library for building user interfaces, employed for creating the frontend of the application.
- **Bootstrap**: A popular CSS framework, utilized for designing a responsive and visually appealing user interface.
- **Vite**: A fast build tool for modern web applications, used for bundling and optimizing the frontend code.
- **Railway**: A hosting platform for deploying web applications, simplifying the deployment process and providing scalable infrastructure.
- **Zenrows**: A module employed to defeat any anti-bot detection measures implemented by the Hermes web store, ensuring accurate restock notifications.

Orange Box Alerts effectively scans the Hermes web store for new product restocks and provides users with reliable and real-time restock notifications.

Happy restock alerts with Orange Box Alerts!

## ERD Diagram

![ERD Diagram](https://github.com/kevinleet/Orange-Box-Alerts/blob/main/orange_box_alerts.drawio.png?raw=true)

## Trello Board

[Trello Board](https://trello.com/b/SDWqp7Rf/orange-box-alerts)
