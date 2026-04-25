# 📄 API Documentation

## 🌐 Base URL
http://localhost:5000/api

---

## 🔐 Authentication

### Register User
POST /auth/register

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "companyName": "My Company"
}

Response:
{
  "success": true,
  "message": "User registered successfully"
}

---

### Login User
POST /auth/login

Request Body:
{
  "email": "john@example.com",
  "password": "123456"
}

Response:
{
  "success": true,
  "accessToken": "jwt_token",
  "refreshToken": "refresh_token"
}

---

### Refresh Token
POST /auth/refresh-token

---

## 👤 Users

### Get All Users
GET /users

Headers:
Authorization: Bearer <access_token>

---

### Get User by ID
GET /users/:id

---

### Update User
PUT /users/:id

---

### Delete User
DELETE /users/:id

---

## 🏢 Companies

### Create Company
POST /companies

---

### Get Company
GET /companies/:id

---

## 🏬 Departments

### Create Department
POST /departments

---

### Get All Departments
GET /departments

---

## 📁 Projects

### Create Project
POST /projects

---

### Get All Projects
GET /projects

Query Params:
?page=1&limit=10&search=projectName

---

### Get Project by ID
GET /projects/:id

---

### Update Project
PUT /projects/:id

---

### Delete Project
DELETE /projects/:id

---

## ✅ Tasks

### Create Task
POST /tasks

---

### Get All Tasks
GET /tasks

---

### Get Task by ID
GET /tasks/:id

---

### Update Task
PUT /tasks/:id

---

### Delete Task
DELETE /tasks/:id

---

## 📊 Activity Logs

### Get Activity Logs
GET /activity-logs

---

## 🔒 Protected Routes

All protected routes require:

Authorization: Bearer <access_token>

---

## ⚙️ Features

- Multi-Tenant Isolation (tenantMiddleware)
- Role-Based Access Control (RBAC)
- Pagination, Filtering, Search
- Request Validation
- Error Handling Middleware
- Rate Limiting

---

## ❗ Error Response Format

{
  "success": false,
  "message": "Error message"
}

---

## 📌 Notes

- Each request is scoped to a tenant (company)
- Unauthorized access is blocked via middleware
- Tokens expire based on JWT configuration