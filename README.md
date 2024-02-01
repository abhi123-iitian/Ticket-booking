For this full-stack project, which includes a SpringBoot backend and a React frontend, here's how you can set it up and run it:
Backend Setup:

    Database Configuration: You'll need to provide a MongoDB URI in the application.properties file to connect to your MongoDB database.
    Running the Backend: Once the database is configured, you can start the backend server. It will be hosted at http://localhost:8080
Frontend Setup:

    Installing Dependencies: Navigate to the client directory. Here, execute npm install to install all the necessary dependencies for the React application.
    Running the Frontend: After installing the dependencies, use the command npm run dev to launch the frontend application. It will be accessible at http://localhost:3000. Note that only requests from this address are configured to communicate with the backend server.
