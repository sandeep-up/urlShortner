# 🔗 URL Shortener

👨‍💻 Author: **sandeep-up**

---

## 📌 Project Description

This project is a **URL Shortener** built using Node.js and Express.js.

It allows users to convert long URLs into short, easy-to-share links.
When a short URL is accessed, it redirects the user to the original long URL.

---

## 🎯 Features

* Convert long URLs into short links
* Redirect short URL → original URL
* Simple and fast URL mapping
* Uses middleware for request handling
* Lightweight and easy to understand

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Postman (for testing)

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/sandeep-up/your-repo-name.git
```

---

### 2. Navigate to the project folder

```bash
cd your-repo-name
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Run the server

```bash
node index.js
```

---

### 5. Server runs on:

```text
http://localhost:3000
```

---

## 📡 How to Use

### 🔹 1. Create Short URL

```text
POST /shorten
```

Body:

```json
{
  "url": "https://example.com/very-long-url"
}
```

Response:

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

### 🔹 2. Redirect to Original URL

Open in browser:

```text
http://localhost:3000/abc123
```

👉 Automatically redirects to original URL

---

## 🔁 How It Works

1. User sends a long URL
2. Server generates a unique short ID
3. Stores mapping (short → original)
4. When short URL is visited → redirect happens

---

## ⚠️ Important Notes

* Data is stored in memory (temporary)
* Restarting server will erase all URLs
* For production, use a database

---

## 📚 What You Learn

* Routing in Express
* Middleware usage
* URL redirection
* Handling requests & responses
* Basic system design

---

## 🚀 Future Improvements

* Add database (MongoDB)
* Generate custom short URLs
* Add analytics (click tracking)
* Add authentication
* Deploy on cloud

---

## 🤝 Contribution

Feel free to fork and improve this project.

---

## 📌 Author

GitHub: https://github.com/sandeep-up
