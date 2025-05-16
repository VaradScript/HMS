# 🏥 Hospital Management System (HMS)

A **full-stack web application** built with Angular (frontend) and Spring Boot (backend) to streamline hospital operations including patient registration, doctor appointments, and medicine inventory management.

![HMS Screenshot](/docs/screenshots/dashboard.png) <!-- Add your screenshot path -->

## 🌟 Features
- **Patient Management**: Register and track patient records
- **Appointment Scheduling**: Book, cancel, and view doctor appointments
- **Doctor Portal**: Manage doctor availability and specialties
- **Medicine Inventory**: Track stock levels and expiry dates
- **Admin Dashboard**: Monitor hospital operations
- **Secure Authentication**: JWT-based login for all user types

## 🛠️ Tech Stack
| Frontend              | Backend               | Database          | DevOps           |
|-----------------------|-----------------------|-------------------|------------------|
| Angular 15            | Spring Boot 3         | MySQL 8           | Git/GitHub       |
| TypeScript            | Java 17               | JPA/Hibernate     | Maven            |
| Bootstrap 5           | Spring Security       |                   |                  |
| RxJS                  | REST APIs             |                   |                  |

## 🚀 Getting Started

### Prerequisites
- Java 17 JDK
- Node.js 16+
- MySQL 8.0+
- Maven 3.8+

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hospital-management-system.git
   cd hospital-management-system
2. Backend Setup
   cd backend
# Configure database in src/main/resources/application.properties
mvn spring-boot:run

3.Frontend Setup
cd frontend
npm install
ng serve

Project Structure
hms/
├── backend/           # Spring Boot application
│   ├── src/
│   ├── pom.xml


├── frontend/          # Angular application
│   ├── src/
│   ├── package.json


├── database/          # SQL scripts
│   ├── schema.sql


├── docs/              # Documentation
│   ├── screenshots/
│   ├── architecture.md


└── README.md          # You are here!

# 🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

# 📜 License
Distributed under the MIT License. See LICENSE for more information.

Project Link: https://github.com/VaradScript/HMS


