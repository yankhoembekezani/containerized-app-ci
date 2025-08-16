![Node.js version](https://img.shields.io/github/package-json/node/yankhoembekezani/containerized-app-ci)
[![License](https://img.shields.io/github/license/yankhoembekezani/containerized-app-ci)](https://github.com/yankhoembekezani/containerized-app-ci/blob/main/LICENSE)
[![Maintained](https://img.shields.io/badge/Maintained-yes-brightgreen.svg)](https://github.com/yankhoembekezani/containerized-app-ci)

## Project Purpose
A minimal Node.js application showcasing the base setup for future containerization and CI/CD workflows.

## Stack / Tools
- Node.js
- Express
- Docker (planned)
- GitHub Actions (planned)

---

## Features (Current)
- Minimal API returning JSON: "Hello World"
- Runs locally with `npm start`

---

## Planned Features
- Containerization with Docker & Docker Compose
- Automated tests
- CI/CD pipeline with GitHub Actions
- Live cloud deployment
- Logging & monitoring

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yankhoembekezani/containerized-app-ci
   cd containerized-app-ci
   ```
2. Install dependencies:
   ```bash
   cd app
   npm install
   ```
3. Run the app locally:	
   ```bash
   npm start
   ```
4. Access endpoint:
   - Root: `http://localhost:3000/`

---

## Folder Structure
   * /app 
   * /tests
   * /docker 

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for full details
