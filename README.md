# Mimosa-server
## Introduction
Mimosa-server is a full-stack web application designed for a beauty salon and spa. It provides a seamless experience for users to explore various beauty packages, book appointments, and manage their bookings. Additionally, administrators have the capability to manage both users and beauty packages efficiently.

## Features
1. **Browse Beauty Packages:**
   - Users can explore a wide range of beauty packages offered by the salon.

2. **Book Beauty Packages:**
   - Users have the ability to book their desired beauty packages.

3. **Manage Booked Packages:**
   - Users can view and manage their booked beauty packages, including cancellations or rescheduling.

4. **Admin User Management:**
   - Administrators can efficiently manage user accounts, including adding, updating, and removing users.

5. **Admin Package Management:**
   - Administrators have control over the beauty packages, allowing them to add new packages, update existing ones, or remove packages from the offerings.

## Tools Used
- **Express.js:** A web application framework for Node.js that simplifies the creation of robust APIs.
  
- **Node.js:** A JavaScript runtime used for building server-side applications.

- **MongoDB:** A NoSQL database for storing and retrieving data efficiently.

- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a more straightforward way to work with MongoDB.

- **TypeScript:** A superset of JavaScript that adds static typing to the language, enhancing code maintainability.

- **JSON Web Tokens (JWT) for Authentication:** Secure user authentication using JWT to ensure secure communication between the server and clients.

## Installation
1. Clone the repository:
   ```bash
   git clone `https://github.com/kajal-rekha/mimosa-server.git`
2. Create an .env file with the following variables:
    MONGO_URI (Your MongoDB connection URI)
    JWT_SECRET (A secret key for JWT token generation)
3. Run yarn to install project dependencies.
4. Start the development server with yarn dev.
  
##Conclusion
Mimosa-server provides a robust and user-friendly platform for a beauty salon and spa, allowing users to effortlessly browse, book, and manage beauty packages. The use of modern technologies like Express.js, Node.js, MongoDB, Mongoose, TypeScript, and JWT authentication ensures a scalable and secure application. Feel free to contribute, report issues, or enhance the features based on your specific requirements. Thank you for considering Mimosa-server for your beauty salon and spa management needs!
