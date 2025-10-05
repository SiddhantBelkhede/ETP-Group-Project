/src
  /components     --> Reusable React components
  /pages          --> React pages (Home, Add, Edit, Details, About)
  App.jsx         --> React routing setup
  main.jsx        --> Main entry point for React
  <page>.css      --> CSS file for each page (same as your page file name)

/backend
  models/
    User.js       --> User schema
    Project.js    --> Project schema
  server.js       --> Express server and API routes

---------------------------------------------------------------
# IEEE Web ETP Project

Welcome to the IEEE Web ETP Project! This is our project for the IEEE Web ETP.

## Project Structure

### **Frontend (React)**

- **/src**
  - **/components**  
    Add your components here
  - **/pages**  
    Add your page here
  - **App.jsx**  
    Add your page routing here
  - **<page>.css**  
    Add your css file here with the same name as your pagefile so we can write our own style

### **Backend (Node.js with Express)**

- **/backend**
  - **/models**  
    Contains the schema files that define the structure of the application's data models.
    - **User.js**: Defines the User schema, including properties and methods related to user data.
    - **Project.js**: Defines the Project schema, representing projects within the application.
  - **server.js**  
    Add your backend here in the formate of
    ```
    app.post("<your path>", async(req, res) => {
        your code for the route
    });
    ```

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/SiddhantBelkhede/ETP-Group-Project.git

npm install
cd .\backend\
npm install

```

### 2. get Project Running
```bash
npm run dev

cd backend 
node server.js
