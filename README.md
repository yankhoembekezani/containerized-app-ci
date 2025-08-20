[![License](https://img.shields.io/github/license/yankhoembekezani/containerized-app-ci)](https://github.com/yankhoembekezani/containerized-app-ci/blob/main/LICENSE)
[![Maintained](https://img.shields.io/badge/Maintained-yes-brightgreen.svg)](https://github.com/yankhoembekezani/containerized-app-ci)

## Project Purpose
A minimal Node.js application showcasing the base setup for future containerization and CI/CD workflows.

## Stack / Tools
- Node.js
- Express
- Docker
- GitHub Actions (planned)

---

## Features (Current)
- Minimal API returning JSON: "Hello World"
- Runs locally with `npm start`
- Containerized with Docker (build & run instructions below)

---

## Planned Features
- Multi-container setup with Docker Compose
- Automated tests
- CI/CD pipeline with GitHub Actions
- Live cloud deployment
- Logging & monitoring

---

## Setup Instructions (locally without Docker)
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

## Run with Docker
1. Build the Docker image
```
   docker build -t containerized-app-ci:v0.1 .
```
2. Run the container
```
   docker run -d -p 3000:3000 containerized-app-ci:v0.1
```
App available at:
http://localhost:3000/

---

## Roadmap
- Day 1: Basic Node.js app ✅

- Day 2: Dockerized Node.js app ✅

- Day 3: Integrate a database (PostgreSQL) and extend functionality

- Day 4: Use Docker Compose for multi-container setup (app + database)

- Day 5+: Testing, CI/CD pipelines, monitoring, and cloud deployment

---

## Folder Structure
- `app/` – main application code (Node.js + Express)
- `tests/` – test files
- `Dockerfile` – containerization setup
- `README.md` – documentation
- `LICENSE` – license details
- `CHANGELOG.md` – project changes log

---

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for full details
