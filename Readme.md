# 💰 Simple Expense Tracker

A simple web-based expense tracker built with **Node.js, Express, MySQL, HTML, CSS, and JavaScript**.  
It allows you to add, view, and manage daily expenses in an interactive UI.

---

## 🚀 Features
- Add expenses with **description, amount, and date**.
- View a list of all expenses in a table format.
- Data stored in **MySQL database**.
- Responsive and modern UI with toggleable expense list.
- Backend powered by **Express.js** and **MySQL2**.

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Other:** body-parser, mysql2  

---

## 📂 Project Structure
.
├── db.js # Database connection
├── server.js # Express server and routes
├── index.html # Main frontend page
├── script.js # Client-side JavaScript
├── style.css # Styling
├── package.json # Node dependencies
└── package-lock.json


---

## ⚙️ Setup Instructions

### 1. Clone the repository
    ```bash
    git clone https://github.com/your-username/Simple-Expense-Tracker.git
    cd Simple-Expense-Tracker

2. Install dependencies

    npm install

3. Setup MySQL database
    Start MySQL server.

    Create a database:

    CREATE DATABASE expense_tracker;
    Update db.js with your MySQL username, password, and port if needed.

4. Start the server

    npm start
    Server will run at:
    👉 http://localhost:3000


🙌 Future Enhancements
    -Edit and delete expenses

    -Add categories and filters

    -User authentication

📜 License
This project is licensed under the MIT License.