# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from project root
COPY app/package*.json ./

# Install dependencies
RUN npm install --production

# Copy app code
COPY app/ .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]

