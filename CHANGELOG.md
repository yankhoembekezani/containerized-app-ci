# Changelog

All notable changes to this project are documented here.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]
### Added
- Planned: CI/CD pipeline with GitHub Actions
- Planned: Automated test suite
- Planned: Logging & monitoring enhancements
- Planned: Cloud deployment

---

## v0.3.0 - 2025-08-21
### Added
- PostgreSQL database integration with `messages` table
- Docker Compose setup for multi-service support (app + database)
- Verification of database connection through `/message` endpoint
- Health check endpoint `/health`
- Updated documentation in README with database, Docker Compose, and verification instructions

---

## v0.2.0 - 2025-08-19
### Added
- Dockerfile for containerization
- Instructions for building and running the app inside a Docker container

---

## v0.1.0 - 2025-08-16
- Initial Node.js app setup
- Minimal API returning JSON
