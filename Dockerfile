# Use a slim Node.js base image for building
FROM node:18-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and other package management files
COPY package*.json ./

# Install dependencies (use RUN for development, COPY for production)
RUN npm install  # For development builds

# Optional: Copy your application code in a separate stage
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy your application code
COPY . .

# Expose the port your application uses (replace 8080 with your actual port)
EXPOSE 3000

# Start the application (replace "start.js" with your entry point)
CMD [ "npm", "start" ]  # Or "node start.js" 

