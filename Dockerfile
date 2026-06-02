# Use Node.js as the base
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything else
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]