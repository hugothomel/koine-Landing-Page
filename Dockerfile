# Use a base image with Node.js installed
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application (assuming it is a Next.js project based on the project structure)
RUN npm run build

# Expose the port the application will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"] 