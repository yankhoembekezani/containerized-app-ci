# Use official Node.js LTS image
FROM node:20-alpine

# Create app directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching)
COPY ../app/package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source code
COPY ../app ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]

